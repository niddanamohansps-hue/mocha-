import React, { useState } from 'react';
import { ArrowDown, Layers, Server, Database, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { ArchitectureNode } from '../../types/project';
import { cn } from '../../utils/cn';

interface ArchitectureDiagramProps {
  flow: ArchitectureNode[];
  overview?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ flow, overview }) => {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(0);

  const getLayerIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-brand-500" />;
      case 1:
        return <Server className="w-5 h-5 text-cyan-500" />;
      case 2:
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 3:
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 4:
      default:
        return <Cpu className="w-5 h-5 text-violet-500" />;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-card/60 p-6 sm:p-8 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-dark-border/80">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Solution Blueprint
          </span>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            How The Solution Works
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-dark-surface px-3 py-1.5 rounded-full border border-slate-200 dark:border-dark-border shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Interactive Flow
        </div>
      </div>

      {overview && (
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {overview}
        </p>
      )}

      {/* Visual Flow Stack */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-3">
          {flow.map((node, index) => {
            const isSelected = selectedLayer === index;
            const isLast = index === flow.length - 1;

            return (
              <React.Fragment key={node.name}>
                <div
                  onClick={() => setSelectedLayer(index)}
                  className={cn(
                    'group relative rounded-2xl border p-4.5 transition-all duration-200 cursor-pointer text-left',
                    isSelected
                      ? 'bg-white dark:bg-dark-surface border-brand-500 shadow-md shadow-brand-500/10 dark:shadow-brand-500/5 ring-1 ring-brand-500'
                      : 'bg-white/80 dark:bg-dark-card/80 border-slate-200/80 dark:border-dark-border/80 hover:border-slate-300 dark:hover:border-slate-700'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-dark-bg/80 border border-brand-100 dark:border-dark-border">
                        {getLayerIcon(index)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                            {node.layer}
                          </span>
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-400">
                            Step 0{index + 1}
                          </span>
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base mt-0.5">
                          {node.name}
                        </h5>
                      </div>
                    </div>
                    <ChevronRight
                      className={cn(
                        'w-4 h-4 text-slate-400 transition-transform duration-200',
                        isSelected && 'rotate-90 text-brand-500'
                      )}
                    />
                  </div>

                  {/* Technology Tags in Card */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {node.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {!isLast && (
                  <div className="flex justify-center my-1">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-brand-500 shadow-sm">
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Layer Deep-Dive Panel */}
        <div className="lg:col-span-5 sticky top-28 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 shadow-sm">
          {selectedLayer !== null && flow[selectedLayer] ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Component Details
                </span>
              </div>
              <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                {flow[selectedLayer].name}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {flow[selectedLayer].description}
              </p>

              <div className="pt-4 border-t border-slate-200/80 dark:border-dark-border/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  Core Technologies & Standards
                </span>
                <ul className="space-y-2">
                  {flow[selectedLayer].technologies.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                Click any step on the left to explore each part of the system.
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Select any component to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};
