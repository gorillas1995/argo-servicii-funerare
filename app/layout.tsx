import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lora, Source_Sans_3 } from 'next/font/google'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StickyCall } from '@/components/sticky-call'
import { phone, siteName, siteUrl } from '@/lib/site'
import './globals.css'

/** Body / UI font — Source Sans 3 for navigation, buttons, forms, and paragraphs. */
const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

/** Display font — Lora for H1 and H2 headings. */
const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Absolute default title — no template suffix (page metaTitles already include the phone).
  title: {
    default: `${siteName} | ${phone}`,
    absolute: `${siteName} | ${phone}`,
  },
  description: `${siteName} oferă servicii funerare complete în București și Ilfov. Asistență non-stop la ${phone}.`,
  openGraph: {
    title: siteName,
    description: `Servicii funerare complete în București și Ilfov. Dispecerat ${phone}.`,
    url: siteUrl,
    siteName,
    locale: 'ro_RO',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" data-scroll-behavior="smooth" className={`${sourceSans.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCall />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
