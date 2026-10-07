/** Shared site constants, navigation, and coverage areas for Agenția Funerară Argo. */

export const siteUrl = 'https://pompe-funebrebucuresti.ro'
export const siteName = 'Agenția Funerară Argo'
export const phone = '0785.165.165'
export const phoneHref = 'tel:+40785165165'
export const phoneIntl = '+40785.165.165'
export const whatsappHref = 'https://wa.me/40785165165'

/**
 * Art-directed homepage hero photographs —
 * desktop (landscape, subject right) and mobile (portrait, subject bottom-right).
 */
export const heroImages = {
  desktop: { src: '/hero-funer.png', width: 1774, height: 887 },
  mobile: { src: '/hero-mobile.png', width: 941, height: 1672 },
  alt: 'Crini albi într-o vază bleumarin — Agenția Funerară Argo',
} as const

/** Primary navigation — labels map to SEO slugs. */
export const mainLinks = [
  { label: 'Despre noi', slug: 'agentia-funerara-argo' },
  { label: 'Prețuri', slug: 'preturi-servicii-funerare-bucuresti' },
  { label: 'Servicii', slug: 'servicii-funerare-bucuresti' },
  { label: 'Produse', slug: 'pompe-funebre-bucuresti' },
  { label: 'Repatriere', slug: 'repatriere-decedati-romania' },
  { label: 'Blog', slug: 'informatii-servicii-funerare' },
  { label: 'Contact', slug: 'firma-pompe-funebre' },
] as const

/**
 * Compact desktop header links — Blog remains in the mobile drawer and footer.
 * Order prioritises services and contact.
 */
export const headerLinks = [
  { label: 'Servicii', slug: 'servicii-funerare-bucuresti' },
  { label: 'Prețuri', slug: 'preturi-servicii-funerare-bucuresti' },
  { label: 'Produse', slug: 'pompe-funebre-bucuresti' },
  { label: 'Repatriere', slug: 'repatriere-decedati-romania' },
  { label: 'Despre noi', slug: 'agentia-funerara-argo' },
  { label: 'Contact', slug: 'firma-pompe-funebre' },
] as const

/** București sectors + Ilfov — used in nav, footer, and internal linking. */
export const areas = [
  {
    label: 'Sector 1',
    slug: 'servicii-funerare-sector-1',
    blurb: 'Prețuri transparente și asistență non-stop în Sector 1.',
  },
  {
    label: 'Sector 2',
    slug: 'servicii-funerare-sector-2',
    blurb: 'Sicrie, batiste, prosoape și pomană la prețuri accesibile.',
  },
  {
    label: 'Sector 3',
    slug: 'servicii-funerare-sector-3',
    blurb: 'Consiliere, întocmire documente și avize funerare.',
  },
  {
    label: 'Sector 4',
    slug: 'servicii-funerare-sector-4',
    blurb: 'Deplasare urgentă, acte de deces și pachete complete.',
  },
  {
    label: 'Sector 5',
    slug: 'servicii-funerare-sector-5',
    blurb: 'Procesiune funerară, transport autorizat și depunere capelă.',
  },
  {
    label: 'Sector 6',
    slug: 'servicii-funerare-sector-6',
    blurb: 'Pompe funebre accesibile, cu sprijin dedicat familiei.',
  },
  {
    label: 'Ilfov',
    slug: 'servicii-funerare-judetul-ilfov',
    blurb: 'Acoperire în tot județul Ilfov, dispecerat 24/7.',
  },
] as const

/** Funeral packages live in lib/packages.ts (full catalog from the old site). */
export { packages } from '@/lib/packages'
