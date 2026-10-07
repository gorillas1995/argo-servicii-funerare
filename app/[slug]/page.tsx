import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PageJsonLd } from '@/components/json-ld'
import { PackagesList } from '@/components/packages-carousel'
import { PageShell } from '@/components/page-shell'
import { allSlugs, getPage } from '@/lib/pages'
import { areas, siteName, siteUrl } from '@/lib/site'

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return {}

  const canonical = `${siteUrl}/${slug}`

  // Absolute title so layout does not append a second phone number.
  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: canonical,
      siteName,
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.description,
    },
  }
}

/** Dynamic SEO pages — unique content per slug from lib/pages. */
export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  const isPrices = slug === 'preturi-servicii-funerare-bucuresti'
  const isContact = slug === 'firma-pompe-funebre'

  return (
    <main className="min-h-screen bg-background text-ink">
      <PageJsonLd page={page} />
      <PageShell page={page}>
        {isPrices && <PackagesBlock />}
        {isContact && <ContactAreasBlock />}
      </PageShell>
    </main>
  )
}

/** Full package catalog on Prețuri — vertical grid for SEO crawlability. */
function PackagesBlock() {
  return (
    <div className="mt-14">
      <h2 className="text-heading">Pachetele noastre funerare</h2>
      <p className="measure mt-4 text-body">
        Pachete complete cu talonul de pensie — înhumare și incinerare. Apăsați „Vedeți mai mult”
        pentru lista completă de servicii și produse. Pentru ofertă personalizată, sunați non-stop.
      </p>
      <PackagesList />
    </div>
  )
}

/** Coverage links on the contact page for local SEO. */
function ContactAreasBlock() {
  return (
    <div className="mt-14">
      <h2 className="text-heading">Alegeți zona dumneavoastră</h2>
      <p className="measure mt-4 text-body">
        Selectați sectorul sau județul pentru detalii locale despre serviciile funerare Argo.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/${area.slug}`}
            className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-5 transition-[border-color] duration-150 hover:border-primary"
          >
            <span>
              <span className="block text-base font-semibold text-ink group-hover:underline">
                {area.label}
              </span>
              <span className="mt-1 block text-sm text-body">{area.blurb}</span>
            </span>
            <ArrowRight className="mt-1 size-4 shrink-0 text-subtle" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  )
}
