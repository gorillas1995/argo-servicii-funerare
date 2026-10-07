'use client'

import { m, useScroll, useTransform } from 'motion/react'
import type { ReactNode } from 'react'
import { useEffect, useState, useRef } from 'react'

/**
 * Desktop-only parallax wrapper — shifts the hero image ~8% as the user scrolls.
 * Children render once (important for LCP); transform is a no-op on touch viewports.
 */
export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  // Enable parallax only on md+ pointer devices to avoid scroll jank on phones
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Always create the transform; apply it only when desktop parallax is enabled
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <m.div
        style={enabled ? { y } : undefined}
        className="absolute inset-0 will-change-transform"
      >
        {children}
      </m.div>
    </div>
  )
}
