import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glass = false, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-2xl transition-all duration-300',
          'bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border/80',
          'shadow-sm dark:shadow-none',
          hoverEffect &&
            'hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-slate-700/80 dark:hover:shadow-brand-500/5',
          glass && 'backdrop-blur-md bg-white/80 dark:bg-dark-card/80',
          glow && 'relative before:absolute before:-inset-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-brand-500/20 before:to-accent-cyan/20 before:-z-10',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
