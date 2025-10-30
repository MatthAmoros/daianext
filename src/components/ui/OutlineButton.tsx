'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * OutlineButton - Clean style button with outline and fill effect
 * Features:
 * - Blue border with transparent background
 * - Text changes from blue to white on hover
 * - Background fills with blue from left to right on hover
 * - Scale animation on hover
 * - Clean and professional appearance
 *
 * Best for: Secondary CTAs, alternative actions, clean designs
 */
const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'group relative overflow-hidden border-2 border-[#0057B8] text-[#0057B8] hover:text-white bg-white hover:bg-[#0057B8] font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
        <div className="absolute inset-0 bg-[#0057B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
      </button>
    )
  }
)

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton