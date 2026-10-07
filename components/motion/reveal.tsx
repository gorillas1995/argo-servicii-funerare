'use client'

import { m, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

/** Shared easing — calm ease-out curve for funeral-site tone. */
const ease = [0.22, 1, 0.36, 1] as const

/** Fade + 16px rise, fires once when the element enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease }}
      {...props}
    >
      {children}
    </m.div>
  )
}

/** Parent for staggered children — provides staggerChildren timing. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </m.div>
  )
}

/** Child of Stagger — inherits stagger timing from the parent. */
export function StaggerItem({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const MotionTag = m[Tag]
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
    >
      {children}
    </MotionTag>
  )
}
