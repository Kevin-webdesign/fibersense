import type {
  ApiEnvelope,
  AuditLogRow,
  AlertRow,
  DashboardData,
  DatasetRow,
  DeviceRow,
  FaultTrendPoint,
  FaultTypePoint,
  FaultRow,
  PredictionRow,
  SignalSample,
  SupportTicketRow,
  TaskRow,
  UserRow,
} from '@/lib/api-types'
import type { RoleKey } from '@/lib/roles'

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown
}

export class FiberSenseApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly payload?: unknown
  ) {
    super(message)
    this.name = 'FiberSenseApiError'
  }
}

export class FiberSenseClient {
  constructor(
    private readonly baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''
  ) {}

  async health(options?: RequestOptions) {
    return this.request<{ service: string; version: string; uptime: string }>(
      '/api/health',
      options
    )
  }

  async dashboard(role: RoleKey, options?: RequestOptions) {
    return this.request<DashboardData>(`/api/dashboard/${role}`, options)
  }

  async faults(options?: RequestOptions) {
    return this.request<FaultRow[]>('/api/faults', options)
  }

  async alerts(options?: RequestOptions) {
    return this.request<AlertRow[]>('/api/alerts', options)
  }

  async predictions(options?: RequestOptions) {
    return this.request<PredictionRow[]>('/api/predictions', options)
  }

  async datasets(options?: RequestOptions) {
    return this.request<DatasetRow[]>('/api/datasets', options)
  }

  async users(options?: RequestOptions) {
    return this.request<UserRow[]>('/api/users', options)
  }

  async devices(options?: RequestOptions) {
    return this.request<DeviceRow[]>('/api/devices', options)
  }

  async networkData(options?: RequestOptions) {
    return this.request<SignalSample[]>('/api/network-data', options)
  }

  async faultTrends(options?: RequestOptions) {
    return this.request<FaultTrendPoint[]>('/api/fault-trends', options)
  }

  async faultTypes(options?: RequestOptions) {
    return this.request<FaultTypePoint[]>('/api/fault-types', options)
  }

  async auditLogs(options?: RequestOptions) {
    return this.request<AuditLogRow[]>('/api/audit-logs', options)
  }

  async tasks(options?: RequestOptions) {
    return this.request<TaskRow[]>('/api/tasks', options)
  }

  async tickets(options?: RequestOptions) {
    return this.request<SupportTicketRow[]>('/api/tickets', options)
  }

  async analyzeFiberMetrics(
    body: {
      networkSegment: string
      signalStrength: number
      signalLoss: number
      attenuation: number
      errorRate: number
      reflectionLevel?: number
      distance?: number
    },
    options?: RequestOptions
  ) {
    return this.request('/api/ai/analyze', {
      ...options,
      method: 'POST',
      body,
    })
  }

  private async request<T>(path: string, options: RequestOptions = {}) {
    const { body, headers, ...init } = options
    const response = await fetch(this.url(path), {
      ...init,
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
    const payload = (await response.json().catch(() => null)) as
      | ApiEnvelope<T>
      | null

    if (!response.ok || payload?.status === 'error') {
      throw new FiberSenseApiError(
        `FiberSense API request failed: ${path}`,
        response.status,
        payload
      )
    }

    return payload?.data as T
  }

  private url(path: string) {
    if (!this.baseUrl) return path
    return new URL(path, this.baseUrl).toString()
  }
}

export const fiberSenseClient = new FiberSenseClient()
