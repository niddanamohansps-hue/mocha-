import React, { TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, rows = 4, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full space-y-1.5">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 rounded-xl text-sm transition-all duration-150',
            'bg-slate-50/80 dark:bg-dark-surface/90 border text-slate-900 dark:text-slate-100',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-dark-card',
            error
              ? 'border-red-500/80 focus:ring-red-500/50'
              : 'border-slate-200 dark:border-dark-border focus:border-brand-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
