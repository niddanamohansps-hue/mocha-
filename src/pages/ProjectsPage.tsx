import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Info } from 'lucide-react';
import { projectsData } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import { useSEO } from '../hooks/useSEO';
import { cn } from '../utils/cn';

export const ProjectsPage: React.FC = () => {
  useSEO({
    title: 'Featured Projects & Case Studies | Real Production Architectures',
    description: 'Explore our software case studies: Recruitment Management Systems, Business CRM Platforms, AI Business Assistants, and Practice Management Portals.',
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise Management System', 'Sales & Client Operations', 'Artificial Intelligence & Automation', 'Healthcare & Clinic Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Showcase"
          title="Flagship Systems Built for High Operational Velocity"
          subtitle="Dive into real software platforms engineered by our team, complete with system topology diagrams, technical challenges, and verified capabilities."
        />

        {/* Ethical Engineering Notice */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
          <Info className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
              Verified Engineering Blueprints & Deployments:
            </span>
            We do not publish fabricated statistics, fake user counts, or fictitious revenue claims. Every case study documented here reflects concrete software architectures designed and implemented for production readiness.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 focus:outline-none',
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-52 sm:h-56 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-6 flex flex-col justify-between overflow-hidden text-white shadow-inner">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="text-xs font-medium text-indigo-100 bg-black/20 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {project.industry}
                    </span>
                  </div>

                  <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white truncate">
                        {project.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-indigo-100">
                      <span>{project.deliverableType}</span>
                      <span>•</span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-dark-border/60">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-xs font-medium text-slate-500">
                  Verified Blueprint
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
};
