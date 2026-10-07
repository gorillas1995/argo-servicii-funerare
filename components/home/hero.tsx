import { getImageProps } from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import { HeroParallax } from '@/components/home/hero-parallax'
import { buttonVariants } from '@/components/ui/button'
import { heroImages, phone, phoneHref } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Full-bleed art-directed hero —
 * desktop uses hero-funer.png (subject right), mobile uses hero-mobile.png (subject bottom).
 * Soft ash wash keeps dark text readable without muddying the light photo.
 */
export function Hero() {
  // Generate optimized srcsets for each art-directed image
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: heroImages.desktop.src,
    alt: heroImages.alt,
    width: heroImages.desktop.width,
    height: heroImages.desktop.height,
    sizes: '100vw',
    priority: true,
  })

  const {
    props: { srcSet: mobileSrcSet, ...mobileImg },
  } = getImageProps({
    src: heroImages.mobile.src,
    alt: heroImages.alt,
    width: heroImages.mobile.width,
    height: heroImages.mobile.height,
    sizes: '100vw',
    priority: true,
  })

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Background photograph with parallax on desktop */}
      <HeroParallax>
        <picture>
          {/* Desktop landscape — subject sits on the right */}
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          {/* Mobile portrait fallback — subject sits bottom-right */}
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
          <img
            {...mobileImg}
            srcSet={mobileSrcSet}
            alt={heroImages.alt}
            className="size-full object-cover object-bottom animate-hero-ken-burns md:object-right"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </HeroParallax>

      {/* Soft wash — vertical on mobile (text at top), horizontal on desktop (text on left) */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/92 via-background/55 to-background/20 md:bg-linear-to-r md:from-background/90 md:via-background/50 md:to-transparent"
        aria-hidden
      />

      {/* Foreground content */}
      <div className="relative container-site flex min-h-[calc(100svh-72px)] flex-col justify-between pb-20 pt-10 md:min-h-[600px] md:justify-center md:pb-24 md:pt-16 lg:min-h-[680px] lg:max-h-[820px]">
        <div className="max-w-xl">
          {/* Short gold accent divider — CSS entrance (no JS needed for LCP text) */}
          <div
            className="mb-6 h-0.5 w-10 bg-accent animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both"
            aria-hidden
          />
          <h1 className="text-display max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            Servicii funerare, cu grijă și respect.
          </h1>
          <p className="measure mt-6 text-body animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
            Asistență funerară completă în București și Ilfov — acte, transport și ceremonie. Ne
            ocupăm de fiecare detaliu, cu discreție. Dispecerat non-stop: {phone}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            <a href={phoneHref} className={cn(buttonVariants({ variant: 'primary' }))}>
              <Phone className="size-4" aria-hidden />
              Sunați-ne
            </a>
            <Link
              href="/servicii-funerare-bucuresti"
              className={cn(buttonVariants({ variant: 'secondary' }))}
            >
              Vedeți serviciile
            </Link>
          </div>
        </div>

        {/* Scroll cue — hints there is more below the fold */}
        <a
          href="#statistici"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-subtle md:flex"
          aria-label="Derulați mai jos"
        >
          <span className="text-xs font-medium tracking-wide uppercase">Mai jos</span>
          <ChevronDown className="size-5 animate-scroll-cue" aria-hidden />
        </a>
      </div>
    </section>
  )
}
