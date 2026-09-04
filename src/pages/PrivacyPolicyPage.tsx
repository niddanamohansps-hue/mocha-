import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig } from '../config/site';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPolicyPage: React.FC = () => {
  useSEO({
    title: 'Privacy Policy | Data Protection & Security Commitments',
    description: 'Our policy regarding data collection, confidentiality, client source code protection, and cybersecurity practices.',
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Legal & Governance"
          title="Privacy Policy"
          subtitle="Last updated: September 2026"
          align="left"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Information We Collect
            </h3>
            <p>
              When you submit an inquiry through the {siteConfig.name} portal, we collect the details you voluntarily provide: your full name, work email, telephone number, organization name, project category, estimated budget, and project description.
            </p>
            <p>
              We do not sell, rent, or trade your contact details or project scopes to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              2. How We Use Collected Data
            </h3>
            <p>
              The information you provide is utilized strictly for evaluating your software requirements, preparing scoping documents, and communicating with you regarding your technical engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Confidentiality & Non-Disclosure
            </h3>
            <p>
              We treat all client business concepts, workflow diagrams, proprietary database structures, and trade secrets with strict confidentiality under mutual non-disclosure principles.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Data Security & Storage
            </h3>
            <p>
              We implement defense-in-depth security measures to protect submitted inquiries against unauthorized interception, modification, or exposure. All transmissions occur over encrypted TLS 1.3 channels.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Contacting Our Data Privacy Officer
            </h3>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request the deletion of your consultation inquiry, please email us directly at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-600 dark:text-brand-400 underline font-medium"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
