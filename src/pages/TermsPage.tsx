import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig } from '../config/site';
import { useSEO } from '../hooks/useSEO';

export const TermsPage: React.FC = () => {
  useSEO({
    title: 'Terms & Conditions | Service Agreement & Code Ownership',
    description: 'Terms of engagement, intellectual property transfer, warranty standards, and client deliverables for software development projects.',
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Legal & Governance"
          title="Terms & Conditions"
          subtitle="Last updated: September 2026"
          align="left"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Engagement & Scoping
            </h3>
            <p>
              All software development, consulting, and automation services provided by {siteConfig.name} are executed pursuant to a mutually executed Statement of Work (SOW) defining concrete milestones, deliverables, technical acceptance criteria, and project timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Intellectual Property & Source Code Ownership
            </h3>
            <p>
              Upon receipt of final milestone payments, full intellectual property rights, application repositories, custom frontend components, database schemas, and documentation are transferred unconditionally to the client. We enforce zero vendor lock-in.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Warranties & Post-Launch Support
            </h3>
            <p>
              We provide a standard 30-day post-launch bug warranty on all custom deliverables to ensure the system operates strictly according to agreed functional specifications. Extended Service Level Agreements (SLAs) for continuous monitoring and enhancements are available upon mutual agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Governing Law
            </h3>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
