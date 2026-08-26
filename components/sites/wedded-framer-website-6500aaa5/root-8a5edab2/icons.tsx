import { RefreshCcw } from "lucide-react"

export function HeartIcon({
  className,
  style,
  fillOpacity = 0,
}: {
  className?: string
  style?: React.CSSProperties
  fillOpacity?: number
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
    >
      <path
        d="M 9.751 16.501 L 18.128 8.003 C 19.959 6.172 19.959 3.204 18.128 1.373 C 16.297 -0.458 13.329 -0.458 11.498 1.373 L 9.751 3.001 L 8.003 1.373 C 6.172 -0.458 3.204 -0.458 1.373 1.373 C -0.458 3.204 -0.458 6.172 1.373 8.003 Z"
        transform="translate(2.249 4.499)"
        fill="currentColor"
        fillOpacity={fillOpacity}
      />
    </svg>
  )
}

export function FlipIcon({ className }: { className?: string }) {
  return <RefreshCcw className={className} strokeWidth={1.5} />
}
