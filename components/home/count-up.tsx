'use client'

import { animate, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  /** Final numeric value shown after the animation. */
  value: number
  /** Optional suffix appended after the number (e.g. "+"). */
  suffix?: string
  /** Optional static label when the value is not a pure number (e.g. "24/7"). */
  display?: string
  className?: string
}

/**
 * Animates from 0 → value once the element enters the viewport.
 * The final value is always rendered in the DOM for SSR / screen readers.
 */
export function CountUp({ value, suffix = '', display, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const [shown, setShown] = useState(display ?? `${value}${suffix}`)

  useEffect(() => {
    // Static labels (e.g. "24/7") skip numeric tweening
    if (display || !inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setShown(`${Math.round(latest)}${suffix}`),
    })
    return () => controls.stop()
  }, [display, inView, suffix, value])

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  )
}
