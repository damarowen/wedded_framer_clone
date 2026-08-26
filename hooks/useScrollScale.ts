"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollScale<T extends HTMLElement = HTMLDivElement>({
  min = 1,
  max = 1.18,
  range = 0.6,
}: {
  min?: number
  max?: number
  range?: number
} = {}) {
  const ref = useRef<T>(null)
  const [scale, setScale] = useState(min)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const itemCenter = rect.top + rect.height / 2
      const viewportCenter = vh / 2
      const distance = Math.abs(itemCenter - viewportCenter)
      const maxDistance = vh * range
      const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance))
      setScale(min + progress * (max - min))
    }

    const handle = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", handle, { passive: true })
    window.addEventListener("resize", handle)
    handle()

    return () => {
      window.removeEventListener("scroll", handle)
      window.removeEventListener("resize", handle)
      cancelAnimationFrame(raf)
    }
  }, [min, max, range])

  return { ref, scale }
}
