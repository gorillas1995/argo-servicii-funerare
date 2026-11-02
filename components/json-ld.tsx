import {
  getLocationPageUrl,
  locationPhoneIntl,
  type LocationNap,
} from '@/lib/locations'
import type { PageContent } from '@/lib/pages'
import { phone, siteName, siteUrl } from '@/lib/site'

/** Shared non-stop opening hours for every Argo location schema. */
const nonStopHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
}

/**
 * Site-wide Organization (no postal address) — parent brand for location FuneralHome nodes.
 * Avoids conflicting NAP with per-page LocalBusiness schemas.
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    telephone: locationPhoneIntl,
    areaServed: [
      { '@type': 'City', name: 'București' },
      { '@type': 'AdministrativeArea', name: 'Ilfov' },
    ],
    description: `${siteName} oferă servicii funerare complete în București și Ilfov. Dispecerat non-stop la ${phone}.`,
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

/** @deprecated Prefer OrganizationJsonLd — kept as alias for any lingering imports. */
export const LocalBusinessJsonLd = OrganizationJsonLd

/**
 * Per-location FuneralHome schema with full NAP, hasMap, and parentOrganization link.
 */
export function LocationJsonLd({ location }: { location: LocationNap }) {
  const pageUrl = getLocationPageUrl(location)

  const data = {
    '@context': 'https://schema.org',
    '@type': ['FuneralHome', 'LocalBusiness'],
    '@id': `${pageUrl}#funeralhome`,
    name: location.name,
    url: pageUrl,
    telephone: locationPhoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      addressCountry: 'RO',
    },
    openingHoursSpecification: nonStopHours,
    hasMap: location.mapsUrl,
    parentOrganization: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.addressRegion,
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

/** BreadcrumbList + optional FAQPage for an inner page. */
export function PageJsonLd({ page }: { page: PageContent }) {
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl },
  ]

  if (page.isSector) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Sectoare',
      item: `${siteUrl}/firma-pompe-funebre`,
    })
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: page.breadcrumbLabel,
      item: `${siteUrl}/${page.slug}`,
    })
  } else {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: page.breadcrumbLabel,
      item: `${siteUrl}/${page.slug}`,
    })
  }

  const graphs: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ]

  if (page.faqs.length > 0) {
    graphs.push({
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': graphs,
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
