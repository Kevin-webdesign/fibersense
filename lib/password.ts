import crypto from "node:crypto"

const ITERATIONS = 100000
const KEY_LENGTH = 64
const DIGEST = "sha512"

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex")
  const hash = crypto
    .pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString("hex")

  return `pbkdf2$${ITERATIONS}$${salt}$${hash}`
}

export function verifyPassword(password: string, storedPassword: string) {
  const [algorithm, iterations, salt, hash] = storedPassword.split("$")

  if (algorithm !== "pbkdf2" || !iterations || !salt || !hash) {
    return false
  }

  const computedHash = crypto
    .pbkdf2Sync(password, salt, Number(iterations), KEY_LENGTH, DIGEST)
    .toString("hex")

  const storedBuffer = Buffer.from(hash, "hex")
  const computedBuffer = Buffer.from(computedHash, "hex")

  if (storedBuffer.length !== computedBuffer.length) {
    return false
  }

  return crypto.timingSafeEqual(storedBuffer, computedBuffer)
}
