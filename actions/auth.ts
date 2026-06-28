"use server"

import { cookies } from "next/headers"
import { prisma } from "@/lib/prisma"
import { sendPasswordResetOtp } from "@/lib/email"
import type { Role } from "@/lib/generated/prisma"
import { generateOtp, hashOtp, otpExpiryDate } from "@/lib/otp"
import { hashPassword, verifyPassword } from "@/lib/password"
import type { RoleKey } from "@/lib/roles"
import { ROLE_COOKIE, USER_ID_COOKIE } from "@/lib/server-session"

const dashboardRoleByDbRole: Record<Role, RoleKey> = {
  ADMINISTRATOR: "admin",
  NETWORK_ENGINEER: "engineer",
  OPERATIONS_STAFF: "operations",
  TECHNICAL_SUPPORT: "support",
}

const dbRoleByDashboardRole: Record<Exclude<RoleKey, "admin">, Role> = {
  engineer: "NETWORK_ENGINEER",
  operations: "OPERATIONS_STAFF",
  support: "TECHNICAL_SUPPORT",
}

export async function loginAction(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({
    where: { email: input.email.trim().toLowerCase() },
    select: {
      id: true,
      fullName: true,
      email: true,
      password: true,
      role: true,
      status: true,
    },
  })

  if (!user || user.status !== "ACTIVE") {
    return { ok: false, error: "Invalid email or password." } as const
  }

  if (!verifyPassword(input.password, user.password)) {
    return { ok: false, error: "Invalid email or password." } as const
  }

  const role = dashboardRoleByDbRole[user.role]
  const cookieStore = await cookies()
  cookieStore.set(ROLE_COOKIE, role, {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
  })
  cookieStore.set(USER_ID_COOKIE, user.id, {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
  })

  return {
    ok: true,
    user: {
      id: user.id,
      name: user.fullName,
      email: user.email,
      role,
    },
  } as const
}

export async function registerAction(input: {
  fullName: string
  email: string
  password: string
  role: Exclude<RoleKey, "admin">
}) {
  if (input.password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." } as const
  }

  const email = input.email.trim().toLowerCase()

  try {
    const user = await prisma.user.create({
      data: {
        fullName: input.fullName.trim(),
        email,
        password: hashPassword(input.password),
        role: dbRoleByDashboardRole[input.role],
        status: "ACTIVE",
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
      },
    })

    const role = dashboardRoleByDbRole[user.role]
    const cookieStore = await cookies()
    cookieStore.set(ROLE_COOKIE, role, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
    })
    cookieStore.set(USER_ID_COOKIE, user.id, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
    })

    return {
      ok: true,
      user: {
        id: user.id,
        name: user.fullName,
        email: user.email,
        role,
      },
    } as const
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return { ok: false, error: "An account with this email already exists." } as const
    }

    return { ok: false, error: "Could not create the account." } as const
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete(ROLE_COOKIE)
  cookieStore.delete(USER_ID_COOKIE)
}

export async function requestPasswordResetOtpAction(input: { email: string }) {
  const email = input.email.trim().toLowerCase()
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, status: true },
  })

  await prisma.passwordResetOtp.deleteMany({
    where: {
      OR: [{ expiresAt: { lt: new Date() } }, { consumedAt: { not: null } }],
    },
  })

  if (user?.status === "ACTIVE") {
    const otp = generateOtp()
    await prisma.passwordResetOtp.create({
      data: {
        email,
        otpHash: hashOtp(email, otp),
        expiresAt: otpExpiryDate(),
      },
    })
    await sendPasswordResetOtp(email, otp)
  }

  return {
    ok: true,
    message: "If the email exists, a verification code has been sent.",
  } as const
}

export async function verifyPasswordResetOtpAction(input: {
  email: string
  otp: string
}) {
  const email = input.email.trim().toLowerCase()
  const otpHash = hashOtp(email, input.otp.trim())
  const reset = await prisma.passwordResetOtp.findFirst({
    where: {
      email,
      otpHash,
      consumedAt: null,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  })

  if (!reset || reset.attempts >= 5) {
    await prisma.passwordResetOtp.updateMany({
      where: { email, consumedAt: null },
      data: { attempts: { increment: 1 } },
    })
    return { ok: false, error: "Invalid or expired verification code." } as const
  }

  await prisma.passwordResetOtp.update({
    where: { id: reset.id },
    data: { verifiedAt: new Date() },
  })

  return { ok: true } as const
}

export async function resetPasswordWithOtpAction(input: {
  email: string
  otp: string
  password: string
}) {
  const email = input.email.trim().toLowerCase()
  const otpHash = hashOtp(email, input.otp.trim())

  if (input.password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." } as const
  }

  const reset = await prisma.passwordResetOtp.findFirst({
    where: {
      email,
      otpHash,
      verifiedAt: { not: null },
      consumedAt: null,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  })

  if (!reset) {
    return { ok: false, error: "Verify your OTP before resetting password." } as const
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { email },
      data: { password: hashPassword(input.password) },
    }),
    prisma.passwordResetOtp.update({
      where: { id: reset.id },
      data: { consumedAt: new Date() },
    }),
    prisma.passwordResetOtp.deleteMany({
      where: {
        email,
        id: { not: reset.id },
      },
    }),
  ])

  return { ok: true } as const
}
