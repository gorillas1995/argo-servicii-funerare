'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { packages, type FuneralPackage } from '@/lib/packages'
import { phone, phoneHref, siteName } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Strip the currency suffix so the rail can show the number alone. */
function priceNumber(label: string) {
  return label.replace(/\s*Ron$/i, '').trim()
}

/** Human kind label used on the badge and short title. */
function kindLabel(kind: FuneralPackage['kind']) {
  return kind === 'incinerare' ? 'Incinerare' : 'Înhumare'
}

/**
 * Prices-page centerpiece: sticky price rail + one detail panel.
 * Every package remains in the HTML (SEO catalog) while the panel drives comparison.
 */
export function PricesShowcase() {
  const inhumare = useMemo(
    () => packages.filter((pkg) => pkg.kind === 'inhumare'),
    [],
  )
  const incinerare = useMemo(
    () => packages.filter((pkg) => pkg.kind === 'incinerare'),
    [],
  )
  const [selectedId, setSelectedId] = useState(packages[0]?.id ?? '')
  const selected = packages.find((pkg) => pkg.id === selectedId) ?? packages[0]
  const railRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  // Keep the active price chip visible when selection changes (keyboard / desktop list)
  useEffect(() => {
    const rail = railRef.current
    if (!rail || !selected) return
    const chip = rail.querySelector<HTMLElement>(`[data-price-id="${selected.id}"]`)
    if (!chip) return
    chip.scrollIntoView({
      behavior:
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [selected])

  const select = useCallback((id: string) => {
    setSelectedId(id)
  }, [])

  if (!selected) return null

  return (
    <section aria-labelledby="prices-showcase-heading" className="prices-showcase">
      <div className="mb-6 max-w-2xl sm:mb-8">
        <h2 id="prices-showcase-heading" className="text-heading">
          Pachetele noastre funerare
        </h2>
        <p className="measure mt-3 text-base leading-relaxed text-body sm:mt-4 sm:text-[1.0625rem]">
          Alegeți un preț de mai jos — vedeți imediat ce include. Toate pachetele se pot achita cu
          talonul de pensie. Pentru o ofertă personalizată, sunați non-stop.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:items-start lg:gap-10">
        {/* Desktop sticky list — full prices, grouped by ceremony type */}
        <nav
          aria-label="Listă prețuri pachete"
          className="hidden lg:sticky lg:top-[calc(72px+16px)] lg:block lg:max-h-[calc(100dvh-72px-32px)] lg:overflow-y-auto lg:pr-1"
        >
          <PriceGroup
            title="Înhumare"
            items={inhumare}
            selectedId={selected.id}
            onSelect={select}
            layout="stack"
          />
          {incinerare.length > 0 && (
            <PriceGroup
              title="Incinerare"
              items={incinerare}
              selectedId={selected.id}
              onSelect={select}
              layout="stack"
              className="mt-6"
            />
          )}
        </nav>

        <div className="min-w-0">
          {/* Mobile / tablet horizontal price rail — sticks under the site header */}
          <div className="sticky top-[72px] z-20 -mx-1 mb-5 bg-[color-mix(in_srgb,var(--muted)_88%,transparent)] px-1 pb-3 pt-2 backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--muted)_72%,transparent)] lg:hidden">
            <div
              ref={railRef}
              className="flex gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Prețuri pachete"
            >
              <PriceGroup
                title="Înhumare"
                items={inhumare}
                selectedId={selected.id}
                onSelect={select}
                layout="rail"
              />
              {incinerare.length > 0 && (
                <PriceGroup
                  title="Incinerare"
                  items={incinerare}
                  selectedId={selected.id}
                  onSelect={select}
                  layout="rail"
                />
              )}
            </div>
          </div>

          <PackageDetail pkg={selected} panelId={panelId} />
        </div>
      </div>

      {/* Crawlable full catalog — all names, prices, services, and products in the initial HTML */}
      <div className="sr-only" aria-hidden="true">
        <h3>Catalog complet pachete funerare</h3>
        {packages.map((pkg) => (
          <article key={`seo-${pkg.id}`}>
            <h4>{pkg.name}</h4>
            <p>{pkg.priceLabel} cu talonul de pensie</p>
            <p>{kindLabel(pkg.kind)}</p>
            <ul>
              {pkg.preview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <details open>
              <summary>Servicii și produse</summary>
              <ul>
                {pkg.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <ul>
                {pkg.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}

type PriceGroupProps = {
  title: string
  items: FuneralPackage[]
  selectedId: string
  onSelect: (id: string) => void
  layout: 'rail' | 'stack'
  className?: string
}

/** Grouped price controls — horizontal chips on mobile, vertical list on desktop. */
function PriceGroup({
  title,
  items,
  selectedId,
  onSelect,
  layout,
  className,
}: PriceGroupProps) {
  if (layout === 'rail') {
    return (
      <div className={cn('flex shrink-0 flex-col gap-2', className)}>
        <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brass">
          {title}
        </span>
        <div className="flex gap-2">
          {items.map((pkg) => {
            const active = pkg.id === selectedId
            return (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                data-price-id={pkg.id}
                aria-selected={active}
                aria-label={`${kindLabel(pkg.kind)} ${pkg.priceLabel}`}
                onClick={() => onSelect(pkg.id)}
                className={cn(
                  'flex min-h-12 min-w-[4.5rem] shrink-0 items-center justify-center rounded-xl px-3.5 text-lg font-semibold tabular-nums transition-[background-color,color,border-color,box-shadow] duration-150',
                  active
                    ? 'border border-primary bg-primary text-white shadow-sm'
                    : 'border border-border bg-surface text-ink hover:border-primary/40',
                )}
              >
                {priceNumber(pkg.priceLabel)}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brass">
        {title}
      </span>
      <ul className="mt-3 flex flex-col gap-1.5" role="list">
        {items.map((pkg) => {
          const active = pkg.id === selectedId
          return (
            <li key={pkg.id}>
              <button
                type="button"
                data-price-id={pkg.id}
                aria-pressed={active}
                aria-label={`${kindLabel(pkg.kind)} ${pkg.priceLabel}`}
                onClick={() => onSelect(pkg.id)}
                className={cn(
                  'flex w-full min-h-12 items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-[background-color,border-color,color] duration-150',
                  active
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface text-ink hover:border-primary/40',
                )}
              >
                <span className="text-sm font-medium opacity-80">{kindLabel(pkg.kind)}</span>
                <span className="text-lg font-semibold tabular-nums">
                  {pkg.priceLabel}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

type PackageDetailProps = {
  pkg: FuneralPackage
  panelId: string
}

/** Single selected package — calm typography, one call action, expandable inclusions. */
function PackageDetail({ pkg, panelId }: PackageDetailProps) {
  const [open, setOpen] = useState(false)
  const detailsId = `${panelId}-details`

  // Collapse the long list when switching packages so the panel stays scannable
  useEffect(() => {
    setOpen(false)
  }, [pkg.id])

  return (
    <article
      id={panelId}
      aria-live="polite"
      className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(36,39,43,0.04),0_12px_32px_rgba(36,39,43,0.04)]"
    >
      <div className="grid gap-0 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* Modest photo height on phones so price and inclusions stay above the fold */}
        <div className="relative aspect-[16/10] max-h-52 overflow-hidden bg-muted sm:max-h-none sm:aspect-auto sm:min-h-[280px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={pkg.id}
            src={pkg.image}
            alt={`${pkg.name} — ${siteName}`}
            className="size-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="absolute left-3 top-3 rounded-md border border-border bg-surface/95 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
            {kindLabel(pkg.kind)}
          </span>
        </div>

        <div className="flex flex-col p-5 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">
            {kindLabel(pkg.kind)}
          </p>
          <p className="mt-2 font-serif text-[clamp(2.25rem,6vw,3.25rem)] font-medium leading-none tracking-tight text-ink">
            {pkg.priceLabel}
          </p>
          <p className="mt-2 text-sm text-subtle">cu talonul de pensie</p>

          <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-5 text-base leading-relaxed text-body">
            {pkg.preview.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  className="mt-1 size-4 shrink-0 text-brass"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-7">
            <a
              href={phoneHref}
              aria-label={`Sunați-ne pentru ${pkg.name} — ${phone}`}
              className={cn(buttonVariants({ variant: 'primary' }), 'w-full')}
            >
              <Phone className="size-4" aria-hidden />
              Sunați-ne · {phone}
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
              aria-expanded={open}
              aria-controls={detailsId}
            >
              {open ? 'Ascundeți detaliile' : 'Ce este inclus'}
              <ChevronDown
                className={cn(
                  'size-4 transition-transform duration-150',
                  open && 'rotate-180',
                )}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id={detailsId}
          className="border-t border-border bg-muted/40 px-5 py-6 sm:px-7"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ink">Servicii</p>
              <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-relaxed text-body">
                {pkg.services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <Check
                      className="mt-1 size-3.5 shrink-0 text-subtle"
                      aria-hidden
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Produse</p>
              <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-relaxed text-body">
                {pkg.products.map((product) => (
                  <li key={product} className="flex items-start gap-2">
                    <Check
                      className="mt-1 size-3.5 shrink-0 text-subtle"
                      aria-hidden
                    />
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
