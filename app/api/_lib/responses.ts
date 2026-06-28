import { NextResponse } from 'next/server'
import type { ApiEnvelope } from '@/lib/api-types'

export function ok<T>(data: T) {
  return NextResponse.json<ApiEnvelope<T>>({ status: 'ok', data })
}

export function error(message: string, status = 400) {
  return NextResponse.json<ApiEnvelope<{ message: string }>>(
    { status: 'error', data: { message } },
    { status }
  )
}
