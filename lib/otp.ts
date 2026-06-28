import crypto from "node:crypto"

export function generateOtp() {
  return crypto.randomInt(100000, 1000000).toString()
}

export function hashOtp(email: string, otp: string) {
  const secret = process.env.JWT_SECRET ?? "fibersense-local-secret"

  return crypto
    .createHmac("sha256", secret)
    .update(`${email.trim().toLowerCase()}:${otp}`)
    .digest("hex")
}

export function otpExpiryDate() {
  const minutes = Number(process.env.PASSWORD_RESET_OTP_EXPIRES_MINUTES ?? 10)
  return new Date(Date.now() + minutes * 60 * 1000)
}
