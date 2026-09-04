import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ArchitectureDiagram } from '../components/common/ArchitectureDiagram';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import { useSEO } from '../hooks/useSEO';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.title} Case Study` : 'Project Case Study',
    description: project ? project.shortDescription : 'Detailed software engineering case study and system architecture.',
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="animate-in fade-in duration-300 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brand">{project.badge}</Badge>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {project.category}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs font-medium text-slate-500">{project.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution Two-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 border-rose-200/80 bg-rose-50/30 dark:bg-rose-950/10 dark:border-rose-900/30 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                The Operational Challenge
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Friction, Fragmented Data & Manual Bottlenecks
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </Card>

          <Card className="p-8 border-emerald-200/80 bg-emerald-50/30 dark:bg-emerald-950/10 dark:border-emerald-900/30 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                The Engineered Solution
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Workflows & Resilient Architecture
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* System Architecture Section */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              End-to-End System Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Technical Architecture & Data Pipeline
            </h2>
          </div>

          <ArchitectureDiagram
            flow={project.architecture.flow}
            overview={project.architecture.overview}
          />
        </div>

        {/* Key Features Visual Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              System Features & Role Permissions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feat) => (
              <Card key={feat.title} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-dark-surface border border-brand-200/60 dark:border-dark-border text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    <DynamicIcon name={feat.iconName || 'CheckCircle2'} className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* UI & Functional Highlights */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              User Experience Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Interface Highlights & Usability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.interfaceHighlights.map((hl) => (
              <div
                key={hl.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200/50 dark:border-brand-800/60 inline-block mb-3">
                  {hl.highlightTag}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {hl.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Outcomes & Capabilities */}
        <div className="mb-24 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
              Verified Capabilities & Deliverables
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Business Outcomes & System Impact
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              * Based on validated operational capabilities and engineered system benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  {cap}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-dark-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Need a similar system built specifically for your organization?
            </div>
            <Button
              to={`/contact?project=${encodeURIComponent(project.title)}`}
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss a Similar Project
            </Button>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
