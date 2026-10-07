import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  HeartHandshake,
  Phone,
  Truck,
} from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { ProcessSteps } from '@/components/home/process-steps'
import { SpotlightCard } from '@/components/home/spotlight-card'
import { StatsStrip } from '@/components/home/stats-strip'
import { MotionProvider } from '@/components/motion/motion-provider'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { PackagesCarousel } from '@/components/packages-carousel'
import { buttonVariants } from '@/components/ui/button'
import { areas, phone, phoneHref, siteName, siteUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Home meta aligned with the live pompe-funebrebucuresti.ro title. */
export const metadata: Metadata = {
  title: {
    absolute: 'Preturi Servicii Funerare | Pompe Funebre Bucuresti | 0785.165.165 Non Stop',
  },
  description:
    'Pachete funerare complete cu talonul de pensie în București și Ilfov. Prețuri transparente, înhumare și incinerare. Asistență non-stop la ☎️ 0785.165.165.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Preturi Servicii Funerare | Pompe Funebre Bucuresti | 0785.165.165 Non Stop',
    description:
      'Pachete funerare complete cu talonul de pensie. Dispecerat non-stop București și Ilfov — 0785.165.165.',
    url: siteUrl,
    siteName,
    locale: 'ro_RO',
    type: 'website',
  },
}

/** Concise service rows — titles and copy from existing homepage claims. */
const services = [
  {
    title: 'Asistență completă',
    text: 'Preluăm toate demersurile, cu discreție și respect, de la primul apel până la ceremonia finală.',
    Icon: HeartHandshake,
  },
  {
    title: 'Transport funerar',
    text: 'Transport autorizat în București, Ilfov și oriunde în România, disponibil non-stop.',
    Icon: Truck,
  },
  {
    title: 'Acte și documente',
    text: 'Vă ajutăm cu actele necesare, avizele și toate formalitățile administrative.',
    Icon: FileText,
  },
  {
    title: 'Pachete transparente',
    text: 'Soluții clare, fără costuri ascunse, adaptate nevoilor și bugetului familiei.',
    Icon: BadgeCheck,
  },
]

/** Verified facts only — years of experience confirmed; non-stop from business data. */
const facts = [
  'Peste 20 de ani de experiență',
  'Dispecerat non-stop',
  'Pachete transparente, fără costuri ascunse',
]

/** Homepage — full-bleed hero, motion reveals, patterned sections. */
export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-background text-ink">
        {/* Full-bleed art-directed hero */}
        <Hero />

        {/* Overlapping stats card */}
        <StatsStrip />

        {/* Services — dotted pattern + spotlight cards */}
        <section className="relative bg-background">
          <div className="pointer-events-none absolute inset-0 bg-pattern-dots" aria-hidden />
          <div className="relative container-site section-y pt-16 md:pt-20">
            <Reveal>
              <div className="max-w-2xl">
                <h2 className="text-heading">Tot ce aveți nevoie, într-un singur loc</h2>
                <p className="measure mt-5 text-body">
                  Vă oferim liniștea de a ști că toate detaliile sunt în mâini sigure. De la preluare
                  și transport la documente și organizarea ceremoniei.
                </p>
              </div>
            </Reveal>
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.1}>
              {services.map(({ title, text, Icon }) => (
                <StaggerItem key={title} as="div">
                  {/* Icon rendered here so the Client Card receives SVG children, not a function prop */}
                  <SpotlightCard title={title} text={text}>
                    <Icon className="size-5" aria-hidden />
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Process timeline — diagonal line pattern */}
        <section className="relative bg-muted">
          <div className="pointer-events-none absolute inset-0 bg-pattern-lines" aria-hidden />
          <div className="relative container-site section-y grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-heading">Ce urmează după apel</h2>
                <p className="measure mt-5 text-body">
                  Un singur telefon este suficient. Vă ghidăm pas cu pas, fără presiune, astfel încât
                  familia să se poată concentra pe ceea ce contează.
                </p>
              </div>
            </Reveal>
            <ProcessSteps />
          </div>
        </section>

        {/* Packages — grid pattern + carousel */}
        <section id="pachete" className="relative bg-muted">
          <div className="pointer-events-none absolute inset-0 bg-pattern-grid" aria-hidden />
          <div className="relative container-site section-y">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-heading">Pachete funerare</h2>
                  <p className="measure mt-5 text-body">
                    Pachete funerare complete la cele mai accesibile prețuri. Puteți alege un pachet
                    de mai jos sau putem configura orice combinație de servicii și produse, ținând
                    cont de bugetul, necesitățile și dorința dumneavoastră. Toate pachetele se pot
                    achita cu talonul de pensie.
                  </p>
                </div>
                <Link
                  href="/preturi-servicii-funerare-bucuresti"
                  className={cn(buttonVariants({ variant: 'link' }), 'shrink-0')}
                >
                  Vedeți toate prețurile <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal className="mt-10" delay={0.1}>
              <PackagesCarousel />
            </Reveal>
          </div>
        </section>

        {/* Why Argo — faint watermark + staggered facts */}
        <section className="relative overflow-hidden bg-background">
          {/* Large decorative watermark */}
          <span
            className="pointer-events-none absolute -right-4 top-8 select-none font-serif text-[clamp(8rem,22vw,16rem)] font-medium leading-none text-ink/[0.04] md:right-8 md:top-4"
            aria-hidden
          >
            20+
          </span>
          <div className="relative container-site section-y grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-heading">Prezenți când aveți cea mai mare nevoie</h2>
                <p className="measure mt-5 text-body">
                  Înțelegem că fiecare familie are nevoi diferite. De aceea, ascultăm, explicăm și
                  acționăm cu răbdare, fără presiune și fără costuri ascunse.
                </p>
                <Link
                  href="/agentia-funerara-argo"
                  className={cn(buttonVariants({ variant: 'link' }), 'mt-6')}
                >
                  Aflați mai multe despre noi <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Stagger className="flex flex-col" stagger={0.12}>
              {facts.map((fact) => (
                <StaggerItem
                  key={fact}
                  as="div"
                  className="flex items-start gap-4 border-b border-border py-5 first:pt-0 last:border-0"
                >
                  {/* Gold marker that grows in with the stagger */}
                  <span className="mt-2.5 h-px w-4 shrink-0 origin-left bg-accent" aria-hidden />
                  <p className="text-title">{fact}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Areas — dotted muted background + lift-on-hover cards */}
        <section className="relative bg-muted">
          <div className="pointer-events-none absolute inset-0 bg-pattern-dots" aria-hidden />
          <div className="relative container-site section-y">
            <Reveal>
              <div className="max-w-2xl">
                <h2 className="text-heading">Sectoare București & Ilfov</h2>
                <p className="measure mt-5 text-body">
                  Intervenim rapid în fiecare sector al Capitalei și în tot județul Ilfov. Alegeți
                  zona dumneavoastră pentru detalii și asistență dedicată.
                </p>
              </div>
            </Reveal>
            <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {areas.map((area) => (
                <StaggerItem key={area.slug} as="div">
                  <Link
                    href={`/${area.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_6px_20px_rgba(36,39,43,0.06)]"
                  >
                    <span>
                      <span className="block text-base font-semibold text-ink group-hover:underline">
                        {area.label}
                      </span>
                      <span className="mt-1 block text-sm text-body">{area.blurb}</span>
                    </span>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden
                    />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Navy contact panel — rings pattern + pulsing CTA */}
        <section className="bg-background">
          <div className="container-site section-y">
            <Reveal>
              <div
                className="relative flex flex-col gap-6 overflow-hidden rounded-lg bg-primary px-6 py-10 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10"
                data-on-navy
              >
                <div className="pointer-events-none absolute inset-0 bg-pattern-rings" aria-hidden />
                <div className="relative max-w-xl">
                  <h2 className="font-serif text-[clamp(1.6875rem,3vw,2.375rem)] font-medium leading-tight text-white">
                    Nu treceți singuri prin acest moment
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-white/85">
                    Un apel este suficient. Vă răspundem cu calm, claritate și soluții potrivite
                    familiei dumneavoastră.
                  </p>
                </div>
                <div className="relative flex shrink-0 flex-col items-start gap-3 sm:items-end">
                  <a
                    href={phoneHref}
                    className={cn(buttonVariants({ variant: 'inverse' }), 'animate-cta-pulse')}
                  >
                    <Phone className="size-4" aria-hidden />
                    Sunați-ne
                  </a>
                  <a href={phoneHref} className="text-base font-semibold text-white">
                    {phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </MotionProvider>
  )
}
