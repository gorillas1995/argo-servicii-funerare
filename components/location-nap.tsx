import { Clock, MapPin, Phone } from 'lucide-react'
import {
  getLocationEmbedUrl,
  locationPhone,
  type LocationNap,
} from '@/lib/locations'
import { phoneHref } from '@/lib/site'

/**
 * Bottom-of-page NAP block: embedded map + textual address / phone / hours
 * and a Google Maps share link for the current location.
 */
export function LocationNapBlock({ location }: { location: LocationNap }) {
  const embedUrl = getLocationEmbedUrl(location)

  return (
    <section
      className="border-t border-border bg-muted"
      aria-labelledby="location-nap-heading"
    >
      <div className="container-site section-y">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Map embed — address query; share.google links are not iframe-stable */}
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_4px_16px_rgba(36,39,43,0.04)]">
            <iframe
              title={`Hartă — ${location.name}`}
              src={embedUrl}
              className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:min-h-[320px] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Textual NAP details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-wide text-subtle uppercase">
              Locație
            </p>
            <h2
              id="location-nap-heading"
              className="mt-2 font-serif text-[clamp(1.375rem,2.5vw,1.875rem)] font-medium leading-tight text-ink"
            >
              {location.name}
            </h2>

            <ul className="mt-6 space-y-4 text-base text-body">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden />
                <span>{location.streetAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden />
                <a
                  href={phoneHref}
                  className="font-semibold text-ink hover:underline"
                >
                  {locationPhone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden />
                <span>{location.hoursLabel}</span>
              </li>
            </ul>

            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              Deschide în Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
