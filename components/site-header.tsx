'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'
import { buttonVariants } from '@/components/ui/button'
import { areas, headerLinks, mainLinks, phone, phoneHref, siteName } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Sticky site header — compact white bar with concise nav and Sunați-ne CTA. */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  // Close the mobile drawer on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        {/* Logo — navy mark from logo.png + Lora wordmark */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 md:gap-3"
          onClick={() => setOpen(false)}
        >
          <SiteLogo size="header" priority />
          <span className="truncate font-serif text-base font-medium tracking-tight text-ink sm:text-lg">
            {siteName}
          </span>
        </Link>

        {/* Desktop navigation — concise subset; Blog lives in drawer/footer */}
        <nav className="hidden items-center gap-5 text-base font-medium text-ink xl:flex" aria-label="Navigare principală">
          {headerLinks.map((link) => (
            <Link key={link.slug} href={`/${link.slug}`} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
          <AreasMenu />
        </nav>

        {/* Phone + primary CTA (tablet and up) */}
        <div className="hidden items-center gap-4 sm:flex">
          <div className="hidden text-right lg:block">
            <a href={phoneHref} className="flex items-center justify-end gap-2 text-base font-semibold text-ink">
              <Phone className="size-4 text-brass" aria-hidden />
              {phone}
            </a>
            <p className="mt-0.5 text-xs font-medium text-subtle">Dispecerat non-stop</p>
          </div>
          <a href={phoneHref} className={cn(buttonVariants({ variant: 'primary' }))}>
            Sunați-ne
          </a>
        </div>

        {/* Mobile menu toggle — 48px tap target */}
        <button
          type="button"
          className="flex size-12 items-center justify-center rounded-md text-ink xl:hidden"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile / tablet drawer */}
      {open && (
        <nav
          id={menuId}
          className="border-t border-border bg-surface xl:hidden"
          aria-label="Meniu mobil"
        >
          <div className="container-site flex flex-col py-2">
            {mainLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/${link.slug}`}
                className="flex min-h-12 items-center text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <AreasMenu mobile onNavigate={() => setOpen(false)} />
            <div className="mt-2 border-t border-border py-4">
              <a href={phoneHref} className="flex items-center gap-2 text-lg font-semibold text-ink">
                <Phone className="size-5 text-brass" aria-hidden />
                {phone}
              </a>
              <p className="mt-1 text-sm text-subtle">Dispecerat non-stop</p>
              <a
                href={phoneHref}
                className={cn(buttonVariants({ variant: 'primary' }), 'mt-4 w-full')}
                onClick={() => setOpen(false)}
              >
                Sunați-ne
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

/** Sector / Ilfov dropdown — desktop panel or mobile grid. */
function AreasMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-1 border-t border-border pt-3 pb-1">
        <p className="py-2 text-sm font-semibold text-brass">Sectoare București & Ilfov</p>
        <div className="grid grid-cols-2 gap-1">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="flex min-h-12 items-center text-base font-medium text-ink"
              onClick={onNavigate}
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 text-base font-medium text-ink hover:text-primary [&::-webkit-details-marker]:hidden">
        Sectoare <ChevronDown className="size-3.5 transition-transform duration-150 group-open:rotate-180" />
      </summary>
      <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-lg border border-border bg-surface p-2 shadow-sm">
        <p className="px-3 pb-2 pt-1 text-xs font-semibold text-brass">București & Ilfov</p>
        <div className="grid grid-cols-2 gap-0.5">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-muted"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  )
}
