import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="relative flex size-8 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
        <span className="absolute size-2 rounded-full bg-primary" />
        <span className="absolute size-4 rounded-full border border-primary/50" />
        <span className="absolute size-6 rounded-full border border-primary/25" />
      </span>
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Fiber<span className="text-primary">Sense</span>
        </span>
      )}
    </div>
  )
}
