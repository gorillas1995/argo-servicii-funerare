import Image from 'next/image'
import type { StockAspect } from '@/lib/stock-images'
import { cn } from '@/lib/utils'

type SupportingImageProps = {
  src: string
  alt: string
  /** CSS aspect ratio key matching the brief formats. */
  aspect?: StockAspect
  objectPosition?: string
  /** Eager-load only when the photo sits above the fold. */
  priority?: boolean
  className?: string
  /** Responsive sizes hint — defaults suit a half-width column on desktop. */
  sizes?: string
}

const aspectClass: Record<StockAspect, string> = {
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
}

/**
 * Rounded supporting photograph for homepage and inner-page sections.
 * Lazy-loads by default; reserves aspect ratio to avoid layout shift.
 */
export function SupportingImage({
  src,
  alt,
  aspect = '4/3',
  objectPosition,
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, 480px',
}: SupportingImageProps) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_6px_20px_rgba(36,39,43,0.05)]',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={cn('h-full w-full object-cover', aspectClass[aspect])}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </figure>
  )
}
