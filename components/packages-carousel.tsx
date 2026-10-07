'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PackageCard } from '@/components/package-card'
import { packages } from '@/lib/packages'

/** Prefer reduced motion for scroll animations when the user requests it. */
function scrollBehavior(): ScrollBehavior {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'auto'
  }
  return 'smooth'
}

/** Mobile-first scroll-snap carousel for all funeral packages. */
export function PackagesCarousel() {
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  /** Reachable scrollLeft positions — fewer than cards when several are visible at once (desktop). */
  const stopsRef = useRef<number[]>([0])
  const [stopCount, setStopCount] = useState(packages.length)
  const [active, setActive] = useState(0)
  /** Only one card may be expanded at a time; null means all collapsed. */
  const [openId, setOpenId] = useState<string | null>(null)

  /** Snap the active index to the stop nearest the current scroll position. */
  const updateActive = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const stops = stopsRef.current
    let index = 0
    for (let i = 1; i < stops.length; i++) {
      if (Math.abs(stops[i] - el.scrollLeft) < Math.abs(stops[index] - el.scrollLeft)) index = i
    }
    setActive(index)
  }, [])

  /** Derive stops from real card offsets so gap/width/breakpoint changes never desync the dots. */
  const measure = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>('[data-package-card]')
    if (!cards.length) return
    const maxScroll = el.scrollWidth - el.clientWidth
    const first = cards[0].offsetLeft
    const stops: number[] = []
    for (const card of cards) {
      const left = Math.min(card.offsetLeft - first, maxScroll)
      // Cards past the end all clamp to maxScroll — collapse them into one stop
      if (stops.length === 0 || left - stops[stops.length - 1] > 1) stops.push(left)
    }
    stopsRef.current = stops
    setStopCount(stops.length)
    updateActive()
  }, [updateActive])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    // rAF-throttle scroll work to one update per frame
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateActive)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    // Re-measure when the viewport/breakpoint changes card widths
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    measure()
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [measure, updateActive])

  // Auto-close the open card when it scrolls out of the carousel viewport (swipe / arrows / dots)
  useEffect(() => {
    const track = scrollerRef.current
    if (!track || !openId) return

    const card = track.querySelector<HTMLElement>(`[data-package-card][data-id="${openId}"]`)
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Close once less than half the card is visible inside the track
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) return
        setOpenId(null)
        // If the user scrolled deep into the expanded list, bring the carousel top back into view
        const root = rootRef.current
        if (root && root.getBoundingClientRect().top < 0) {
          root.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
        }
      },
      { root: track, threshold: 0.5 },
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [openId])

  const scrollTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const stops = stopsRef.current
    const target = stops[Math.max(0, Math.min(stops.length - 1, index))]
    el.scrollTo({ left: target, behavior: scrollBehavior() })
  }

  const prev = () => scrollTo(active - 1)
  const next = () => scrollTo(active + 1)

  return (
    // scroll-mt-24 clears the sticky site header when we scroll the carousel back into view
    <div ref={rootRef} className="relative scroll-mt-24">
      {/* Carousel track — items-start so an expanded card grows alone instead of stretching its siblings */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Pachete funerare"
      >
        {packages.map((pkg, i) => (
          <div
            key={pkg.id}
            data-package-card
            data-id={pkg.id}
            className="w-[85%] max-w-md shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <PackageCard
              pkg={pkg}
              priority={i === 0}
              open={openId === pkg.id}
              onToggle={() => setOpenId((id) => (id === pkg.id ? null : pkg.id))}
            />
          </div>
        ))}
      </div>

      {/* Prev / next — 48px tap targets, rounded-md, clear disabled state */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={active === 0}
          aria-label="Pachetul anterior"
          className="flex size-12 items-center justify-center rounded-md border border-border bg-surface text-ink transition-[border-color,opacity] duration-150 hover:border-primary disabled:opacity-35"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>

        {/* One dot per reachable position — 24px hit area; active = navy */}
        <div className="flex flex-wrap items-center justify-center gap-1" role="tablist" aria-label="Navigare pachete">
          {Array.from({ length: stopCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Mergeți la ${packages[i]?.priceLabel ?? `poziția ${i + 1}`}`}
              onClick={() => scrollTo(i)}
              className="flex size-6 items-center justify-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-150 ${
                  i === active ? 'w-6 bg-primary' : 'w-2.5 bg-border hover:bg-subtle'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={active === stopCount - 1}
          aria-label="Pachetul următor"
          className="flex size-12 items-center justify-center rounded-md border border-border bg-surface text-ink transition-[border-color,opacity] duration-150 hover:border-primary disabled:opacity-35"
        >
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-subtle">
        {active + 1} / {stopCount} — glisați sau folosiți săgețile
      </p>
    </div>
  )
}

/** Vertical stack of all packages for the Prețuri page (SEO-friendly full lists). */
export function PackagesList() {
  return (
    // items-start keeps an expanded card from stretching the others in its grid row
    <div className="mt-8 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pkg, i) => (
        <PackageCard key={pkg.id} pkg={pkg} priority={i < 3} />
      ))}
    </div>
  )
}
