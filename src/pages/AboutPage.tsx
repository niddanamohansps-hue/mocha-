import React from 'react';
import { ShieldCheck, Eye, Sparkles, Clock, Building2, GraduationCap, Stethoscope, Briefcase, Home } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import { useSiteConfig } from '../context/SiteConfigContext';
import { useSEO } from '../hooks/useSEO';

const values = [
  {
    title: 'Quality Above Shortcuts',
    description: 'We adhere strictly to clean code architecture, comprehensive type safety, and defensive programming. Every system is built to stand the test of continuous business usage.',
    icon: ShieldCheck,
    color: 'text-brand-500',
    bg: 'bg-brand-500/10',
  },
  {
    title: 'Radical Transparency',
    description: 'No technical smoke and mirrors. We communicate clearly regarding timelines, architectural trade-offs, and pricing. You maintain full visibility throughout each development sprint.',
    icon: Eye,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    title: 'Security by Architecture',
    description: 'Data isolation, encrypted storage, secure authentication flows, and sanitized inputs are non-negotiable baselines engineered into the core of our software.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Pragmatic Innovation',
    description: 'We adopt new technologies—such as LLM integrations and modern automation frameworks—only when they provide genuine operational leverage to your business.',
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    title: 'Long-Term Thinking',
    description: 'We build relationships that last years, not weeks. We treat your software platform as a living business asset requiring maintenance, upgrades, and care.',
    icon: Clock,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
];

const targetSectors = [
  { name: 'Startups & Tech Ventures', icon: Sparkles, desc: 'Rapid MVP engineering with clean scalable foundations ready for investment rounds.' },
  { name: 'SMEs & Growing Enterprises', icon: Building2, desc: 'Custom operations software and ERP modules replacing fragmented manual spreadsheets.' },
  { name: 'Schools & Educational Institutions', icon: GraduationCap, desc: 'Admissions, student records, fee collection systems, and staff scheduling portals.' },
  { name: 'Clinics & Healthcare Providers', icon: Stethoscope, desc: 'HIPAA/compliance-aware booking workflows, patient record management, and WhatsApp updates.' },
  { name: 'Recruitment & Staffing Agencies', icon: Briefcase, desc: 'Candidate pipelines, interview scorecard panels, and client portal management.' },
  { name: 'Real Estate & Property Firms', icon: Home, desc: 'Lead routing engines, CRM deal management, and client inventory catalogs.' },
];

export const AboutPage: React.FC = () => {
  const { config } = useSiteConfig();

  useSEO({
    title: `About Us | Engineering Useful Technology for Ambitious Businesses - ${config.name}`,
    description: `Learn about ${config.name}, our engineering philosophy, mission, core values, and how we help businesses become digital.`,
  });

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          badge="About Our Agency"
          title="We Build Software That Solves Real Operational Problems"
          subtitle={`${config.name} is an engineering-first technology agency founded on the premise that businesses deserve reliable, high-performance software without bloated agency overhead.`}
        />

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Too many businesses struggle with off-the-shelf software tools that force them into rigid boxes, or deal with unreliable freelancers who disappear when maintenance is needed.
            </p>
            <p>
              At <strong className="text-slate-900 dark:text-white">{config.name}</strong>, we act as your dedicated technical partner. We translate complex business workflows into elegant, resilient web applications, custom management systems, and automated pipelines.
            </p>
            <p className="p-5 rounded-2xl bg-brand-50/50 dark:bg-dark-surface/60 border border-brand-200/60 dark:border-dark-border text-slate-800 dark:text-slate-200 font-medium text-base">
              &quot;{config.subTagline}&quot; Whether you are an educational institution modernizing student admissions, a clinic automating patient visits, or a staffing firm orchestrating interviews—we engineer solutions designed to scale with your volume.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/80 dark:border-dark-border/80 bg-gradient-to-br from-brand-50 via-white to-indigo-50/50 dark:from-dark-card dark:via-dark-surface dark:to-slate-900 p-8 sm:p-10 text-center space-y-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                &ldquo;Build reliable digital solutions that help businesses operate better and grow faster.&rdquo;
              </h3>
              <div className="pt-4 border-t border-slate-200/80 dark:border-dark-border/80 text-xs font-medium text-slate-500">
                Built for Real Business Needs • Long-Term Partnership
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <SectionHeading
            badge="Our Principles"
            title="The Values That Guide Every Solution We Deliver"
            subtitle="Software is an investment in your company’s future. We govern our work with five fundamental commitments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <Card key={val.title} className="p-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${val.bg} ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Who We Build For */}
        <div className="mb-24">
          <SectionHeading
            badge="Target Industries"
            title="Who We Partner With"
            subtitle="We design purposeful solutions for organizations that are ready to digitize and automate manual workflows."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-brand-50 dark:bg-dark-surface text-brand-600 dark:text-brand-400 border border-brand-200/50 dark:border-dark-border flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                      {sector.name}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
