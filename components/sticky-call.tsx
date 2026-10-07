import { Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { phone, phoneHref, whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Compact mobile bottom call bar — keeps contact reachable without covering content.
 * Hidden from lg breakpoint up; body padding in globals.css reserves space below.
 */
export function StickyCall() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label="Contact rapid"
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={phoneHref}
          aria-label={`Sunați-ne la ${phone}`}
          className={cn(buttonVariants({ variant: 'primary' }), 'min-w-0 flex-1')}
        >
          <Phone className="size-4" aria-hidden />
          Sunați-ne
        </a>
        <a
          href={whatsappHref}
          aria-label="Scrieți pe WhatsApp"
          className={cn(buttonVariants({ variant: 'secondary' }), 'min-w-0 flex-1')}
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
