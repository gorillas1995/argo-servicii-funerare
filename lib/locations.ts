import { phone, siteUrl } from '@/lib/site'

/** Structured NAP for a physical Argo location (home + sector / Ilfov pages). */
export type LocationNap = {
  /** null = homepage; otherwise matches areas[].slug */
  slug: string | null
  /** Display / schema.org business name from the local listing */
  name: string
  /** Full street line for humans and PostalAddress.streetAddress */
  streetAddress: string
  /** City (București or Berceni) */
  addressLocality: string
  /** Sector N or Ilfov — used as addressRegion */
  addressRegion: string
  /** Google Maps share URL (hasMap + visible link) */
  mapsUrl: string
  /** Human-readable hours label shown next to NAP */
  hoursLabel: string
}

/** Canonical phone shared by every location listing. */
export const locationPhone = phone
export const locationPhoneIntl = '+40785165165'

/**
 * One NAP entry per SEO landing page that should expose a local FuneralHome schema
 * and a footer map block. Order matches the homepage areas grid.
 */
export const locations: LocationNap[] = [
  {
    slug: null,
    name: 'Argo - Servicii Funerare Bucuresti',
    streetAddress: 'Strada Ivo Andric, Nr. 6, Sector 3, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 3',
    mapsUrl: 'https://share.google/kqcussCZHk4uvAoRu',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-1',
    name: 'Argo - Servicii Funerare Bucuresti Sector 1',
    streetAddress: 'Strada Pajurei, Nr. 8, Sector 1, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 1',
    mapsUrl: 'https://share.google/aKwunY9EWMEuja3lU',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-2',
    name: 'Argo - Servicii Funerare Bucuresti Sector 2',
    streetAddress: 'Strada Soldat Marin Savu, Nr. 7, Sector 2, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 2',
    mapsUrl: 'https://share.google/AwR3FRaB10DUFaAfX',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-3',
    name: 'Argo - Servicii Funerare Bucuresti Sector 3',
    streetAddress: 'Soseaua Mihai Bravu, Nr. 329, Sector 3, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 3',
    mapsUrl: 'https://share.google/c0WW7DPJWBJGWrj1J',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-4',
    name: 'Casa Funerara Argo',
    streetAddress: 'Soseaua Olteniței, Nr. 161, Sector 4, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 4',
    mapsUrl: 'https://share.google/51hhV2iApyvmrR1In',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-5',
    name: 'Argo - Servicii Funerare Bucuresti Sector 5',
    streetAddress: 'Strada Petre Ispirescu, Nr. 16, Sector 5, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 5',
    mapsUrl: 'https://share.google/00NLHAu2pyyJzWtfF',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-sector-6',
    name: 'Argo - Servicii Funerare Bucuresti Sector 6',
    streetAddress: 'Bulevardul Iuliu Maniu, Nr. 59, Sector 6, Bucuresti',
    addressLocality: 'București',
    addressRegion: 'Sector 6',
    mapsUrl: 'https://share.google/wROU33vCoOWhkTV0f',
    hoursLabel: 'Non Stop',
  },
  {
    slug: 'servicii-funerare-judetul-ilfov',
    name: 'Agentia Funerara Argo',
    streetAddress: 'Strada Avram Iancu, Nr. 2, Berceni, Ilfov',
    addressLocality: 'Berceni',
    addressRegion: 'Ilfov',
    mapsUrl: 'https://share.google/mBuEgk3veghRonQ5Y',
    hoursLabel: 'Non Stop',
  },
]

/** Homepage location (slug null). */
export function getHomeLocation(): LocationNap {
  return locations.find((loc) => loc.slug === null)!
}

/** Location for a sector / Ilfov page slug, or undefined if the page has no NAP. */
export function getLocationBySlug(slug: string): LocationNap | undefined {
  return locations.find((loc) => loc.slug === slug)
}

/** Canonical page URL for schema.org `url`. */
export function getLocationPageUrl(location: LocationNap): string {
  return location.slug ? `${siteUrl}/${location.slug}` : siteUrl
}

/**
 * Embeddable Google Maps iframe src — share.google short links cannot be iframed reliably,
 * so we query Maps with the street address.
 */
export function getLocationEmbedUrl(location: LocationNap): string {
  const query = encodeURIComponent(
    `${location.streetAddress}, ${location.addressLocality}, Romania`,
  )
  return `https://maps.google.com/maps?q=${query}&z=15&output=embed`
}
