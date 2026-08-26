"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollProgress<T extends HTMLElement = HTMLElement>({
  startOffset = 0.8,
  endOffset = 0.2,
}: {
  startOffset?: number
  endOffset?: number
} = {}) {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)
  const lastProgress = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId: number
    let active = false

    const update = () => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const start = rect.top - viewportHeight * startOffset
      const end = rect.bottom - viewportHeight * endOffset
      const distance = end - start

      const value = distance > 0 ? (0 - start) / distance : 0
      const next = Math.min(1, Math.max(0, value))
      if (next !== lastProgress.current) {
        lastProgress.current = next
        setProgress(next)
      }
      active = false
    }

    const onScroll = () => {
      if (active) return
      active = true
      rafId = requestAnimationFrame(update)
    }

    rafId = requestAnimationFrame(update)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [startOffset, endOffset])

  return { ref, progress }
}
