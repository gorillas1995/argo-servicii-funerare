'use client'

import { m, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

/** Practical guidance steps shown after the first call. */
const steps = [
  'Evaluare inițială la telefon, cu calm și claritate',
  'Ajutor cu actele și formalitățile necesare',
  'Organizare transport și ceremonie, după nevoile familiei',
] as const

/**
 * Vertical timeline — a gold line draws itself via scroll progress,
 * and each numbered step fades in with stagger.
 */
export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 50%'],
  })
  // Draw the line from top to bottom as the section scrolls into view
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative">
      {/* Track — muted background line */}
      <div
        className="absolute top-3 bottom-3 left-[15px] w-px bg-border md:left-[19px]"
        aria-hidden
      />
      {/* Progress fill — gold, origin top, driven by scroll */}
      <m.div
        className="absolute top-3 bottom-3 left-[15px] w-px origin-top bg-accent md:left-[19px]"
        style={{ scaleY }}
        aria-hidden
      />

      <Stagger className="flex flex-col gap-8" stagger={0.12}>
        {steps.map((step, index) => (
          <StaggerItem key={step} as="div" className="relative flex gap-5 pl-0">
            {/* Numbered gold dot */}
            <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface font-serif text-sm font-medium text-brass md:size-10 md:text-base">
              {index + 1}
            </span>
            <div className="pt-0.5 md:pt-1.5">
              <p className="text-sm font-semibold text-brass">Pasul {index + 1}</p>
              <p className="mt-1 text-base text-body md:text-lg">{step}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
