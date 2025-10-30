'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * GradientButton - Premium style button with gradient background and shimmer effect
 * Features:
 * - Dynamic gradient from #0057B8 to #003865 that reverses on hover
 * - White shimmer effect that slides across on hover
 * - Scale animation on hover
 * - Elegant shadows
 *
 * Best for: Primary CTAs, hero sections, important actions
 */
const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'group relative overflow-hidden bg-gradient-to-r from-[#0057B8] to-[#003865] hover:from-[#003865] hover:to-[#0057B8] text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'h-12 px-6 text-sm': size === 'sm',
            'h-14 px-8': size === 'md',
            'h-16 px-12 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative z-10 flex items-center gap-2">{children}</div>
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      </button>
    )
  }
)

GradientButton.displayName = 'GradientButton'

export default GradientButton