import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Card } from '../ui/Card';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../ui/Button';

interface FeaturedProjectsProps {
  showHeading?: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ showHeading = true }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-100/40 dark:bg-dark-surface/30 border-y border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Engineering Case Studies"
            title="Systems Engineered for Real Business Workflows"
            subtitle="Explore our flagship software architectures, CRM platforms, and AI automation engines designed to solve concrete operational challenges."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / User-Friendly Modern Showcase */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-6 flex flex-col justify-between overflow-hidden text-white shadow-inner">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="text-xs font-medium text-indigo-100 bg-black/20 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {project.industry}
                    </span>
                  </div>

                  {/* Clean Visual Centerpiece */}
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

                {/* Content Area */}
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

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-dark-border/60">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">
                  Verified Blueprint
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            to="/projects"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View All Architecture Blueprints & Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};
