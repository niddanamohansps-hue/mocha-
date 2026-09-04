import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      to,
      href,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-brand-600 text-white hover:bg-brand-500 active:bg-brand-700 shadow-md shadow-brand-600/20 dark:shadow-brand-500/10 border border-brand-500/30',
      secondary:
        'bg-slate-100 text-slate-900 hover:bg-slate-200/80 dark:bg-dark-surface dark:text-slate-100 dark:hover:bg-slate-800 dark:border-dark-border border border-slate-200',
      outline:
        'border border-slate-300 dark:border-dark-border bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-dark-surface/80',
      ghost:
        'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-dark-surface/50',
      glow:
        'bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan text-white shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 hover:brightness-110 border border-white/20',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-4.5 py-2.5 gap-2 font-semibold',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={classes}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
