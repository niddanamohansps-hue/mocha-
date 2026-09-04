import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, Clock, Bot, CalendarCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSiteConfig } from '../../context/SiteConfigContext';

export const HeroSection: React.FC = () => {
  const { config } = useSiteConfig();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      {/* Soft, Warm Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-sky-400/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-80 h-80 bg-rose-400/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Friendly Headline & Action */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Digital Transformation & Automation Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              We Build Digital Products That{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500">
                Move Businesses Forward.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              From professional websites to powerful business management systems and AI-powered automation, we build software designed to help ambitious companies grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-xl shadow-indigo-600/20"
              >
                {config.cta.primary}
              </Button>
              <Button
                to="/projects"
                variant="outline"
                size="lg"
              >
                {config.cta.secondary}
              </Button>
            </div>

            {/* Friendly Trust Anchors */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-dark-border/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">Easy & Intuitive UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">Dedicated Ongoing Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Approachable Business Software Interface Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200 dark:border-dark-border/80 bg-white/90 dark:bg-dark-card/95 p-6 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-dark-border/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-2">
                    {config.shortName} Business Hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live & Syncing
                </div>
              </div>

              {/* Approachable Business Cards */}
              <div className="space-y-3.5">
                {/* Visual 1: Client Inquiries / Booking */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border/60">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      Client Booking Received
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full text-[11px]">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    Dr. Sharma Healthcare • Automatic WhatsApp notification dispatched.
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full w-[94%]" />
                  </div>
                </div>

                {/* Visual 2: Operations Efficiency */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border/60">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-500" />
                      Automated Task Execution
                    </span>
                    <span className="font-medium text-slate-500 text-xs">Unattended</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span>142 invoices & records synced</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Saved 18 hrs/week</span>
                  </div>
                </div>

                {/* Visual 3: Growth Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border/60">
                    <span className="text-slate-500 text-[11px] block">Weekly Speed</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">+45%</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border/60">
                    <span className="text-slate-500 text-[11px] block">Accuracy</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">99.9%</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border/60">
                    <span className="text-slate-500 text-[11px] block">Satisfaction</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">5.0 ★</span>
                  </div>
                </div>

                {/* Visual 4: Smart Business Assistant */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-sky-950/30 border border-indigo-200/60 dark:border-indigo-800/60">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      AI Workflow Assistant
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                    &quot;{config.subTagline}&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Human Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-6 items-center gap-3 bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border px-4 py-3 rounded-2xl shadow-xl">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">Tailored for Growing Businesses</span>
                <span className="text-slate-500">Schools • Clinics • Startups • SMEs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
