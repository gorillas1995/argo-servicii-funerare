import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'
import { areas, mainLinks, phone, phoneHref, siteName } from '@/lib/site'

/** Site-wide footer — light muted surface with navigation and phone. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted text-body">
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.2fr_.9fr_.9fr]">
        <div>
          {/* Logo — navy mark from logo.png + Lora wordmark */}
          <div className="flex items-center gap-3">
            <SiteLogo size="footer" />
            <span className="font-serif text-xl font-medium text-ink">{siteName}</span>
          </div>
          <p className="measure mt-5 text-base leading-relaxed">
            Servicii funerare complete, cu respect, discreție și sprijin pentru familiile din București și Ilfov.
          </p>
          <a href={phoneHref} className="mt-6 flex items-center gap-2 text-xl font-semibold text-ink">
            <Phone className="size-5 text-brass" aria-hidden />
            {phone}
          </a>
          <p className="mt-1 text-sm text-subtle">Dispecerat non-stop</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">Navigare</h2>
          <div className="mt-4 grid gap-3 text-base sm:grid-cols-2">
            {mainLinks.map((link) => (
              <Link key={link.slug} href={`/${link.slug}`} className="text-subtle hover:text-ink hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">Sectoare București & Ilfov</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-base">
            {areas.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="text-subtle hover:text-ink hover:underline">
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Short gold divider above copyright */}
      <div className="container-site pb-6">
        <div className="mx-auto h-px w-12 bg-accent" aria-hidden />
        <p className="mt-5 text-center text-sm text-subtle">
          © {new Date().getFullYear()} {siteName} · Toate drepturile rezervate
        </p>
      </div>
    </footer>
  )
}
