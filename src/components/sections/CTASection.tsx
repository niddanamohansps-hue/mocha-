import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSiteConfig } from '../../context/SiteConfigContext';

export const CTASection: React.FC = () => {
  const { config } = useSiteConfig();

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-dark-card to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Ready To Modernize Your Operations?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build Software That Gives Your Business An Unfair Advantage.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              &quot;{config.subTagline}&quot; Schedule a discovery session to review requirements, explore architecture options, and receive a transparent project proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/contact"
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {config.cta.primary}
              </Button>
              <Button
                to="/projects"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-800/80"
              >
                {config.cta.secondary}
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fast 24-Hour Scope Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Lock-in Contract</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA & Full IP Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
