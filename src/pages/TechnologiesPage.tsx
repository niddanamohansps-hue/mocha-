import React from 'react';
import { technologyCategories } from '../data/technologies';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { CTASection } from '../components/sections/CTASection';
import { useSEO } from '../hooks/useSEO';

export const TechnologiesPage: React.FC = () => {
  useSEO({
    title: 'Technology Stack & Engineering Standards | Python, Django, React, PostgreSQL',
    description: 'Explore the modern, battle-tested technologies we utilize to engineer resilient web applications, custom management systems, and AI workflows.',
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Modern Technology Stack"
          title="Reliable Tools That Power Your Business"
          subtitle="We use modern, enterprise-grade technologies to make sure your applications are fast, secure, easy to maintain, and ready to scale effortlessly."
        />

        <div className="space-y-16 mb-24">
          {technologyCategories.map((cat) => (
            <div key={cat.title} className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-dark-border">
                <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-dark-surface border border-brand-200/60 dark:border-dark-border text-brand-600 dark:text-brand-400">
                  <DynamicIcon name={cat.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.technologies.map((tech) => (
                  <Card key={tech.name} className="p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {tech.name}
                        </h4>
                        {tech.featured && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200/50 dark:border-brand-800/60">
                            Core Tool
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {tech.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
                          Why It Benefits You:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300">
                          {tech.roleInStack}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {tech.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white dark:bg-dark-bg text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-border shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
};
