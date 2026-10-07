import { CountUp } from '@/components/home/count-up'
import { Reveal } from '@/components/motion/reveal'

/** Three key figures overlapping the bottom of the hero. */
const stats = [
  { value: 20, suffix: '+', label: 'ani de experiență' },
  { value: 0, display: '24/7', label: 'dispecerat non-stop' },
  { value: 7, suffix: '', label: 'zone acoperite' },
] as const

/**
 * White stats card that sits half over the hero and half over the next section,
 * adding depth without a heavy shadow.
 */
export function StatsStrip() {
  return (
    <div id="statistici" className="relative z-10 -mt-12 scroll-mt-24 md:-mt-14">
      <div className="container-site">
        <Reveal>
          <dl className="grid grid-cols-1 overflow-hidden rounded-lg border border-border bg-surface shadow-[0_8px_30px_rgba(36,39,43,0.06)] sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i > 0
                    ? 'border-t border-border px-6 py-6 text-center sm:border-t-0 sm:border-l sm:px-8'
                    : 'px-6 py-6 text-center sm:px-8'
                }
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.value}
                    suffix={'suffix' in stat ? stat.suffix : ''}
                    display={'display' in stat ? stat.display : undefined}
                    className="block font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl"
                  />
                  <span className="mt-1 block text-sm text-subtle">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  )
}
