import React from 'react';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { servicesData } from '../data/services';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { useSEO } from '../hooks/useSEO';

export const ServicesPage: React.FC = () => {
  useSEO({
    title: 'Services & Technical Capabilities | Custom Web Apps, ERPs, AI & Automation',
    description: 'Explore our full spectrum of software services: custom web apps, business systems, CRM platforms, AI integration, WhatsApp automation, and cloud deployments.',
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Digital Solutions Engineered to Grow Your Business"
          subtitle="We engineer end-to-end digital infrastructure—from clean, high-converting web applications to robust backend systems and autonomous AI workflows."
        />

        <div className="space-y-12 sm:space-y-16 mb-24">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Icon & Core Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-dark-surface border border-brand-200/60 dark:border-dark-border text-brand-600 dark:text-brand-400 flex items-center justify-center">
                      <DynamicIcon name={service.iconName} className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Tech stack pills */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Inquire About This Service
                    </Button>
                  </div>
                </div>

                {/* Right Column: Key Benefits & Concrete Deliverables */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50/80 dark:bg-dark-surface/50 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-dark-border/80">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Key Business Benefits
                    </h4>
                    <div className="space-y-3.5">
                      {service.benefits.map((benefit) => (
                        <div key={benefit.title}>
                          <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                            {benefit.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4 flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      What We Deliver
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
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
