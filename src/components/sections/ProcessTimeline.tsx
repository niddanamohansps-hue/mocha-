import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { developmentProcess } from '../../data/process';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../ui/Button';

interface ProcessTimelineProps {
  showAll?: boolean;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ showAll = false }) => {
  const steps = showAll ? developmentProcess : developmentProcess.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Build Together"
          title="From Business Concept to Production Reality"
          subtitle="A clear, transparent 6-step journey designed to eliminate surprises and guarantee on-time delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-600 dark:text-brand-400">
                    {step.number}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-border">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  {step.tagline}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-dark-border/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.slice(0, 2).map((del) => (
                    <li key={del} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/process"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Our Complete Process
          </Button>
        </div>
      </div>
    </section>
  );
};
