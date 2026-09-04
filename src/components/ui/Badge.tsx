import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'brand',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    brand: 'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60',
    cyan: 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60',
    violet: 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/60',
    amber: 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-dark-surface dark:text-slate-300 dark:border-dark-border',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 font-medium rounded-full',
    md: 'text-xs px-3 py-1 font-semibold rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border font-sans tracking-normal transition-colors shadow-sm',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
