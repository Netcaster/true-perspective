import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const base =
    'inline-flex items-center justify-center text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer'
  const variants = {
    default: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  }
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant] ?? variants.default, className)}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = 'Button'

export { Button }
