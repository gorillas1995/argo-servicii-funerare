import { phone, siteName, siteUrl } from '@/lib/site'
import type { PageContent } from '@/lib/pages'

/** LocalBusiness / FuneralHome schema for the agency (phone-only NAP). */
export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['FuneralHome', 'LocalBusiness'],
    name: siteName,
    url: siteUrl,
    telephone: '+40785165165',
    areaServed: [
      { '@type': 'City', name: 'București' },
      { '@type': 'AdministrativeArea', name: 'Ilfov' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    description: `${siteName} oferă servicii funerare complete în București și Ilfov. Dispecerat non-stop la ${phone}.`,
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
