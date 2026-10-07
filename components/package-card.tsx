'use client'

import { useState } from 'react'
import { Check, ChevronDown, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import type { FuneralPackage } from '@/lib/packages'
import { phone, phoneHref, siteName } from '@/lib/site'
import { cn } from '@/lib/utils'

type PackageCardProps = {
  pkg: FuneralPackage
  /** Prefer eager loading for the first visible card. */
  priority?: boolean
  className?: string
  /** Controlled expand state — when set, the parent owns open/close. */
  open?: boolean
  /** Controlled toggle callback — used with `open` by the carousel. */
  onToggle?: () => void
}

/** Single package card with preview + expandable Servicii / Produse lists. */
export function PackageCard({
  pkg,
  priority = false,
  className = '',
  open: openProp,
  onToggle,
}: PackageCardProps) {
  // Uncontrolled fallback so PackagesList keeps independent open/close per card
  const [localOpen, setLocalOpen] = useState(false)
  const open = openProp ?? localOpen
  const toggle = onToggle ?? (() => setLocalOpen((v) => !v))
  const detailsId = `pkg-details-${pkg.id}`

  return (
    <article
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[0_1px_2px_rgba(36,39,43,0.04)]',
        className,
      )}
    >
      <div className="relative h-48 shrink-0 overflow-hidden bg-muted sm:h-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={`${pkg.name} — ${siteName}`}
          className="size-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
        {/* Sentence-case type label — charcoal on white for contrast */}
        <span className="absolute left-3 top-3 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-ink">
          {pkg.kind === 'incinerare' ? 'Incinerare' : 'Înhumare'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-title">{pkg.name}</h3>
        <p className="mt-2 text-2xl font-semibold text-ink">{pkg.priceLabel}</p>
        <p className="mt-1 text-sm text-subtle">cu talonul de pensie</p>

        <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5 text-base text-body">
          {pkg.preview.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-subtle" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        {/* Expandable full lists — in-place so users keep context on mobile */}
        {open && (
          <div id={detailsId} className="mt-5 space-y-5 border-t border-border pt-5 text-base">
            <div>
              <p className="text-sm font-semibold text-ink">Servicii</p>
              <ul className="mt-3 flex flex-col gap-2 text-body">
                {pkg.services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-subtle" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Produse</p>
              <ul className="mt-3 flex flex-col gap-2 text-body">
                {pkg.products.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-subtle" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <button
            type="button"
            onClick={toggle}
            className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
            aria-expanded={open}
            aria-controls={detailsId}
          >
            {open ? 'Vedeți mai puțin' : 'Vedeți mai mult'}
            <ChevronDown
              className={cn('size-4 transition-transform duration-150', open && 'rotate-180')}
              aria-hidden
            />
          </button>
          <a
            href={phoneHref}
            aria-label={`Sunați-ne pentru ${pkg.name} — ${phone}`}
            className={cn(buttonVariants({ variant: 'primary' }), 'w-full')}
          >
            <Phone className="size-4" aria-hidden />
            Sunați-ne
          </a>
        </div>
      </div>
    </article>
  )
}
