import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { developmentProcess } from '../data/process';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { useSEO } from '../hooks/useSEO';

export const ProcessPage: React.FC = () => {
  useSEO({
    title: 'Our Development Process | Disciplined 6-Step Engineering Methodology',
    description: 'Learn how we take your project from discovery and architecture planning through design, agile development, testing, and continuous support.',
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="A Structured, Transparent Path to Reliable Software"
          subtitle="We believe predictable software delivery is the result of clear communication and disciplined milestones. Here is how we turn your vision into production-ready software."
        />

        <div className="relative space-y-12 sm:space-y-16 mb-24">
          {developmentProcess.map((step) => (
            <div
              key={step.number}
              className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-brand-600 dark:text-brand-400">
                      {step.number}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-border">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {step.tagline}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-dark-border/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-3">
                      Key Deliverables in This Phase:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
};
