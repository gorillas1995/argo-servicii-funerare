import type { MetadataRoute } from 'next'
import { allSlugs } from '@/lib/pages'
import { siteUrl } from '@/lib/site'

/** Sitemap kept in sync with lib/pages slugs. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1, changeFrequency: 'weekly' },
    ...allSlugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      priority: 0.8 as const,
      changeFrequency: 'monthly' as const,
    })),
  ]
}
