'use client'

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'

type SpotlightCardProps = {
  title: string
  text: string
  /** Icon rendered by the parent (Server Component–safe as children). */
  children: ReactNode
}

/**
 * Service card with a soft gold spotlight that follows the pointer.
 * Uses CSS variables on pointermove — no React re-renders per frame.
 * Touch devices fall back to a static border (no hover glow).
 */
export function SpotlightCard({ title, text, children }: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null)

  /** Write pointer position into CSS custom properties for the radial glow. */
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || event.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(36,39,43,0.06)]"
      style={
        {
          '--spot-x': '50%',
          '--spot-y': '50%',
        } as CSSProperties
      }
    >
      {/* Pointer-following gold glow — pointer-events none so it never blocks clicks */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:hidden"
        style={{
          background:
            'radial-gradient(280px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--accent) 14%, transparent), transparent 60%)',
        }}
        aria-hidden
      />
      <div className="relative">
        {/* Icon badge — SVG comes from the parent as children */}
        <span className="mb-4 flex size-11 items-center justify-center rounded-md border border-border bg-muted text-brass">
          {children}
        </span>
        <h3 className="text-title">{title}</h3>
        <p className="mt-2 text-base text-body">{text}</p>
      </div>
    </article>
  )
}
