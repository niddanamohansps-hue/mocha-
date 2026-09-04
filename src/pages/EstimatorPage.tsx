import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, ArrowRight, Check, Layers, Clock, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';

interface SolutionType {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  baseWeeks: number;
  iconName: string;
  recommendedStack: string[];
}

const solutionTypes: SolutionType[] = [
  {
    id: 'web-app',
    name: 'Custom Web Application',
    tagline: 'Tailored software platform with custom data schemas and user workflows.',
    basePrice: 55000,
    baseWeeks: 5,
    iconName: 'Code2',
    recommendedStack: ['React', 'TypeScript', 'Django', 'PostgreSQL'],
  },
  {
    id: 'erp-system',
    name: 'Business Management / ERP',
    tagline: 'Centralized operational command center for inventory, staff, and records.',
    basePrice: 75000,
    baseWeeks: 7,
    iconName: 'BarChart3',
    recommendedStack: ['React', 'TypeScript', 'Django REST', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'crm-platform',
    name: 'Sales CRM Platform',
    tagline: 'Pipeline management, lead scoring, and automated client follow-ups.',
    basePrice: 45000,
    baseWeeks: 4,
    iconName: 'Users',
    recommendedStack: ['React', 'TypeScript', 'Django', 'PostgreSQL'],
  },
  {
    id: 'corporate-website',
    name: 'High-Conversion Website',
    tagline: 'Fast, responsive, search-optimized web presence built for authority.',
    basePrice: 25000,
    baseWeeks: 2,
    iconName: 'Globe',
    recommendedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'ai-integration',
    name: 'AI & Knowledge Assistant',
    tagline: 'Intelligent RAG assistant querying company docs with verified citations.',
    basePrice: 65000,
    baseWeeks: 5,
    iconName: 'Bot',
    recommendedStack: ['React', 'Python', 'LangChain', 'pgvector', 'Claude/GPT APIs'],
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Automation Engine',
    tagline: 'Automated appointment reminders, order alerts, and interactive bot flows.',
    basePrice: 35000,
    baseWeeks: 3,
    iconName: 'MessageSquare',
    recommendedStack: ['WhatsApp Cloud API', 'Webhooks', 'Django / Node', 'Redis'],
  },
];

interface AddonFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  weeks: number;
}

const addonFeatures: AddonFeature[] = [
  {
    id: 'rbac',
    name: 'Granular Role Permissions (RBAC)',
    description: 'Separate Super Admin, Manager, and Staff views with strict data boundaries.',
    price: 15000,
    weeks: 1,
  },
  {
    id: 'telemetry',
    name: 'Executive Analytics & Telemetry',
    description: 'Visual graphs, conversion pacing metrics, and exportable financial summaries.',
    price: 18000,
    weeks: 1,
  },
  {
    id: 'payment',
    name: 'Payment Gateway & Automated Invoicing',
    description: 'Razorpay / Stripe integration with automated PDF invoice dispatch.',
    price: 15000,
    weeks: 1,
  },
  {
    id: 'whatsapp-alerts',
    name: 'Meta WhatsApp Notification Engine',
    description: 'Direct transactional messages for appointment & status milestones.',
    price: 15000,
    weeks: 1,
  },
  {
    id: 'ai-rag',
    name: 'Internal Document RAG Search',
    description: 'Vector embeddings allowing natural language search over company SOPs.',
    price: 30000,
    weeks: 2,
  },
  {
    id: 'celery-queues',
    name: 'Asynchronous Background Queues',
    description: 'Redis + Celery workers offloading emails and cron jobs without UI lag.',
    price: 12000,
    weeks: 1,
  },
  {
    id: 'cloud-cicd',
    name: 'Hardened Linux VPS & Automated CI/CD',
    description: 'SSL/TLS termination, Nginx reverse proxy, and GitHub Actions push-to-deploy.',
    price: 15000,
    weeks: 1,
  },
];

export const EstimatorPage: React.FC = () => {
  useSEO({
    title: 'Interactive Project Scope & Cost Estimator | Calculate Timelines & Budgets',
    description: 'Configure your software requirements interactively to estimate architecture needs, sprint timelines, and transparent investment brackets.',
  });

  const navigate = useNavigate();

  const [selectedSolution, setSelectedSolution] = useState<string>('web-app');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['rbac', 'cloud-cicd']);
  const [pace, setPace] = useState<'standard' | 'accelerated'>('standard');

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const solution = solutionTypes.find((s) => s.id === selectedSolution) || solutionTypes[0];

  const calculation = useMemo(() => {
    let totalBase = solution.basePrice;
    let totalWeeks = solution.baseWeeks;

    selectedAddons.forEach((addonId) => {
      const addon = addonFeatures.find((a) => a.id === addonId);
      if (addon) {
        totalBase += addon.price;
        totalWeeks += addon.weeks;
      }
    });

    if (pace === 'accelerated') {
      totalBase = Math.round(totalBase * 1.15);
      totalWeeks = Math.max(2, Math.round(totalWeeks * 0.75));
    }

    const minPrice = Math.round(totalBase * 0.9);
    const maxPrice = Math.round(totalBase * 1.1);

    // Map to contact budget bracket
    let budgetBracket = '₹50,000–₹1,00,000';
    if (minPrice < 25000) budgetBracket = 'Under ₹25,000';
    else if (minPrice < 50000) budgetBracket = '₹25,000–₹50,000';
    else if (minPrice > 100000) budgetBracket = '₹1,00,000+';

    return {
      minPrice,
      maxPrice,
      totalWeeks,
      budgetBracket,
      activeAddonNames: selectedAddons
        .map((id) => addonFeatures.find((a) => a.id === id)?.name)
        .filter(Boolean) as string[],
    };
  }, [solution, selectedAddons, pace]);

  const handleProceed = () => {
    const summaryText = `[Estimator Scope] Solution: ${solution.name}. Add-ons: ${calculation.activeAddonNames.join(', ')}. Desired Timeline: ~${calculation.totalWeeks} Weeks. Estimated Investment: ₹${calculation.minPrice.toLocaleString('en-IN')} - ₹${calculation.maxPrice.toLocaleString('en-IN')}.`;

    navigate(`/contact?service=${encodeURIComponent(solution.name)}&budget=${encodeURIComponent(calculation.budgetBracket)}&scope=${encodeURIComponent(summaryText)}`);
  };

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Project Estimator"
          title="Calculate Your Project Scope, Architecture & Budget"
          subtitle="Explore architectural modules and see realistic delivery timelines and investment estimates calculated dynamically."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          {/* Configuration Builder Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1: Core Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Select Core Platform Type
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutionTypes.map((type) => {
                  const isSelected = selectedSolution === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedSolution(type.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                        isSelected
                          ? 'bg-brand-50/70 dark:bg-dark-surface border-brand-500 ring-2 ring-brand-500 shadow-md'
                          : 'bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">
                            {type.name}
                          </h4>
                          {isSelected && (
                            <span className="p-1 rounded-full bg-brand-500 text-white">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                          {type.tagline}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-dark-border/60 text-xs font-medium text-slate-500">
                        <span>Base: ~{type.baseWeeks} Weeks</span>
                        <span className="font-semibold text-brand-600 dark:text-brand-400">
                          from ₹{type.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Add Specialized Capabilities
                </h3>
              </div>

              <div className="space-y-3">
                {addonFeatures.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-slate-50 dark:bg-dark-surface border-brand-500/80 shadow-sm'
                          : 'bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-colors ${
                            isChecked
                              ? 'bg-brand-600 border-brand-600 text-white'
                              : 'border-slate-300 dark:border-slate-600 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {addon.name}
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {addon.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0 text-xs font-medium">
                        <span className="font-bold text-slate-900 dark:text-white block">
                          +₹{addon.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-slate-400">+{addon.weeks} wk</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Velocity Mode */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Delivery Pace
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPace('standard')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    pace === 'standard'
                      ? 'bg-slate-50 dark:bg-dark-surface border-brand-500 ring-1 ring-brand-500 shadow-sm'
                      : 'bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border'
                  }`}
                >
                  <span className="font-bold text-sm block text-slate-900 dark:text-white">
                    Standard Agile Pace
                  </span>
                  <span className="text-xs text-slate-500">
                    Balanced weekly sprints with regular stakeholder demonstrations.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPace('accelerated')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    pace === 'accelerated'
                      ? 'bg-slate-50 dark:bg-dark-surface border-brand-500 ring-1 ring-brand-500 shadow-sm'
                      : 'bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      Accelerated Pace
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full">
                      Fast Track
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Dedicated dual-engineer pod compressing delivery time by ~25%.
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Summary Card (Sticky) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <Card className="p-7 border-brand-500/30 shadow-xl space-y-6 bg-gradient-to-b from-white via-white to-slate-50/80 dark:from-dark-card dark:via-dark-card dark:to-dark-surface/80">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-brand-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Estimated Scope
                  </h4>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Live Estimate
                </span>
              </div>

              {/* Price Estimate */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Estimated Investment:
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  ₹{calculation.minPrice.toLocaleString('en-IN')}{' '}
                  <span className="text-base text-slate-400 font-normal">to</span>{' '}
                  ₹{calculation.maxPrice.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-slate-500">
                  * Fixed-milestone pricing with zero recurring developer fees.
                </span>
              </div>

              {/* Timeline Estimate */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 dark:border-dark-border/80">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                    Estimated Timeline
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-sm">
                    <Clock className="w-3.5 h-3.5 text-brand-500" />
                    <span>~{calculation.totalWeeks} Weeks</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                    Ownership
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>100% Code & IP</span>
                  </div>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80 dark:border-dark-border/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Recommended Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {solution.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white dark:bg-dark-bg text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proceed Button */}
              <div className="pt-2">
                <Button
                  onClick={handleProceed}
                  variant="glow"
                  size="lg"
                  className="w-full justify-center shadow-lg shadow-brand-600/25"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Proceed With This Scope
                </Button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Transfers your selected specifications directly to our scoping inquiry.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
