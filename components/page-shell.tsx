import Link from 'next/link'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import type { PageContent } from '@/lib/pages'
import { getRelatedPages } from '@/lib/pages'
import { phone, phoneHref, whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'

type PageShellProps = {
  page: PageContent
  /** Optional slot for extra blocks (e.g. package cards on prices page). */
  children?: React.ReactNode
}

/** Inner-page layout: breadcrumbs, light hero, SEO body, FAQ, related links. */
export function PageShell({ page, children }: PageShellProps) {
  const related = getRelatedPages(page.relatedSlugs)

  return (
    <>
      {/* Light hero with bottom border */}
      <section className="border-b border-border bg-background">
        <div className="container-site section-y !py-12 lg:!py-16">
          <Breadcrumbs page={page} />
          <p className="mt-6 text-sm font-semibold text-brass">{page.eyebrow}</p>
          <h1 className="text-display mt-3 max-w-4xl">{page.h1}</h1>
          <p className="measure mt-5 text-lg text-body">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={phoneHref} className={cn(buttonVariants({ variant: 'primary' }))}>
              <Phone className="size-4" aria-hidden />
              Sunați-ne
            </a>
            <a href={whatsappHref} className={cn(buttonVariants({ variant: 'secondary' }))}>
              Scrieți pe WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Body + sticky navy call panel */}
      <section className="bg-background">
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <article className="min-w-0">
              {page.sections.map((section) => (
                <div key={section.heading} className="mb-12 last:mb-0">
                  <h2 className="text-heading">{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="measure mt-5 text-body">
                      {p}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 flex flex-col gap-4">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-base text-ink sm:text-lg">
                          <span className="mt-2.5 h-px w-3.5 shrink-0 bg-accent" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {page.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={page.image}
                  alt={`${page.title} — Agenția Funerară Argo`}
                  width={1200}
                  height={750}
                  className="mt-4 aspect-[16/10] w-full rounded-lg object-cover"
                  loading="lazy"
                />
              )}

              {children}
            </article>

            {/* Sticky navy support panel */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-lg bg-primary p-7 text-white" data-on-navy>
                <p className="text-sm font-semibold text-white/80">Dispecerat non-stop</p>
                <p className="mt-3 font-serif text-2xl font-medium text-white">
                  Aveți nevoie de ajutor acum?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Suntem disponibili 24/7 în București și Ilfov. Un apel este suficient.
                </p>
                <a
                  href={phoneHref}
                  className={cn(buttonVariants({ variant: 'inverse' }), 'mt-6 w-full')}
                >
                  <Phone className="size-4" aria-hidden />
                  {phone}
                </a>
                <a
                  href={whatsappHref}
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'mt-3 w-full border-white/40 text-white hover:bg-white/10 hover:text-white',
                  )}
                >
                  Scrieți pe WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="bg-muted">
          <div className="container-site section-y">
            <h2 className="text-heading">Întrebări frecvente</h2>
            <div className="mt-10 grid gap-3 lg:grid-cols-2">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-border bg-surface px-5"
                >
                  <summary className="flex min-h-12 cursor-pointer list-none items-center font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    <span className="flex w-full items-start justify-between gap-4 py-3">
                      {faq.question}
                      <ChevronRight className="mt-0.5 size-5 shrink-0 text-subtle transition-transform duration-150 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="pb-5 text-base leading-relaxed text-body">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related pages */}
      {related.length > 0 && (
        <section className="bg-background">
          <div className="container-site section-y">
            <h2 className="text-heading">Continuați să explorați</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.slug}`}
                  className="rounded-lg border border-border bg-surface p-5 transition-[border-color] duration-150 hover:border-primary"
                >
                  <p className="text-xl font-semibold text-ink">{rel.breadcrumbLabel}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-body">{rel.intro.slice(0, 100)}…</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Vedeți pagina <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Light bottom band — avoids repeating navy */}
      <section className="border-t border-border bg-muted">
        <div className="container-site flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-heading">Suntem aici pentru dumneavoastră</h2>
            <p className="mt-2 text-body">Dispecerat disponibil non-stop în București și Ilfov.</p>
          </div>
          <a href={phoneHref} className={cn(buttonVariants({ variant: 'primary' }), 'shrink-0')}>
            <Phone className="size-4" aria-hidden />
            {phone}
          </a>
        </div>
      </section>
    </>
  )
}

/** Breadcrumb trail: Acasă › [Sectoare ›] Page */
function Breadcrumbs({ page }: { page: PageContent }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-subtle">
      <Link href="/" className="hover:text-ink hover:underline">
        Acasă
      </Link>
      <ChevronRight className="size-3.5 opacity-60" aria-hidden />
      {page.isSector && (
        <>
          <span>Sectoare</span>
          <ChevronRight className="size-3.5 opacity-60" aria-hidden />
        </>
      )}
      <span className="text-ink" aria-current="page">
        {page.breadcrumbLabel}
      </span>
    </nav>
  )
}
