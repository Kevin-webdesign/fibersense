export async function sendPasswordResetOtp(email: string, otp: string) {
  const webhookUrl = process.env.PASSWORD_RESET_WEBHOOK_URL

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject: "FiberSense password reset OTP",
        message: `Your FiberSense password reset OTP is ${otp}. It expires in 10 minutes.`,
      }),
    })
    return
  }

  console.info(`[FiberSense password reset] OTP for ${email}: ${otp}`)
}
