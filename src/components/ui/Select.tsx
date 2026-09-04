import React, { SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: (SelectOption | string)[];
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, helperText, id, required, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full space-y-1.5">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              'w-full px-4 py-3 rounded-xl text-sm appearance-none transition-all duration-150',
              'bg-slate-50/80 dark:bg-dark-surface/90 border text-slate-900 dark:text-slate-100',
              'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-dark-card',
              error
                ? 'border-red-500/80 focus:ring-red-500/50'
                : 'border-slate-200 dark:border-dark-border focus:border-brand-500',
              className
            )}
            {...props}
          >
            {options.map((opt) => {
              const val = typeof opt === 'string' ? opt : opt.value;
              const lbl = typeof opt === 'string' ? opt : opt.label;
              return (
                <option key={val} value={val} className="bg-white dark:bg-dark-card text-slate-900 dark:text-slate-100">
                  {lbl}
                </option>
              );
            })}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
