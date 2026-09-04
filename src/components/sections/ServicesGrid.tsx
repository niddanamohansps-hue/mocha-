import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/services';
import { DynamicIcon } from '../common/DynamicIcon';
import { Card } from '../ui/Card';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../ui/Button';

interface ServicesGridProps {
  showAll?: boolean;
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ showAll = false, limit }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Capabilities"
          title="End-to-End Technology for Scaling Businesses"
          subtitle="From customer-facing websites to internal operations and automated pipelines, we deliver enterprise-grade software built around your goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {displayedServices.map((service) => (
            <Card
              key={service.id}
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-dark-surface border border-brand-200/60 dark:border-dark-border text-brand-600 dark:text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-200">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-dark-border/60 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1.5">
                    Key Value Delivered:
                  </span>
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="mt-14 text-center">
            <Button
              to="/services"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Technical Services & Deliverables
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
