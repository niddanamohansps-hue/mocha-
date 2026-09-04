import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', align === 'center' ? 'flex justify-center' : 'flex justify-start')}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
