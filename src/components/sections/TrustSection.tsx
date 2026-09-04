import React from 'react';
import { Target, Layers, ShieldCheck, LifeBuoy } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeading } from '../common/SectionHeading';

const trustPillars = [
  {
    title: 'Custom Solutions',
    description: 'Technology designed specifically around your business needs, replacing rigid generic software with tailored workflows.',
    icon: Target,
    color: 'text-brand-500',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    title: 'Scalable Architecture',
    description: 'Build systems that can grow with your business without requiring costly ground-up rewrites as customer traffic scales.',
    icon: Layers,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    title: 'Modern Technology',
    description: 'Use reliable, modern, industry-standard technologies (React, TypeScript, Django, PostgreSQL) chosen for longevity.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    title: 'Long-Term Support',
    description: 'Help clients maintain and continuously improve their digital products with dedicated SLA warranties and monitoring.',
    icon: LifeBuoy,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 border-y border-slate-200/80 dark:border-dark-border/80 bg-slate-100/50 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Engineering Reliability into Every System We Build"
          subtitle="We avoid quick hacks and ephemeral shortcuts. We construct durable digital foundations that allow your team to operate smoothly."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.bg} ${pillar.color} border ${pillar.border}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
