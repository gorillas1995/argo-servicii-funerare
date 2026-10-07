import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * Shared button styles — navy primary, charcoal outline secondary,
 * inverse for navy panels, and link for text actions.
 * Applied via className on <a>/<Link> as well as the Button primitive.
 */
const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-base font-semibold whitespace-nowrap transition-[color,background-color,border-color] duration-150 outline-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-hover',
        secondary:
          'border border-ink bg-transparent text-ink hover:bg-muted active:bg-muted',
        inverse:
          'bg-white text-primary hover:bg-muted active:bg-muted focus-visible:outline-white',
        link: 'h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 min-h-12 px-6',
        lg: 'h-12 min-h-12 px-8',
        icon: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
