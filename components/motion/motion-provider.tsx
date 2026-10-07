'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Homepage-only Motion shell — LazyMotion + domAnimation keeps the
 * feature bundle ~15 KB, and reducedMotion="user" respects OS preferences.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
