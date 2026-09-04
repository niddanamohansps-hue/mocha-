import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, AlertCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/common/SectionHeading';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useSiteConfig } from '../context/SiteConfigContext';
import { useLeads } from '../context/LeadContext';
import { useSEO } from '../hooks/useSEO';
import {
  ContactFormData,
  ContactFormErrors,
  BusinessTypeOption,
  ProjectTypeOption,
  BudgetOption,
} from '../types/contact';

const businessTypeOptions: BusinessTypeOption[] = [
  'Startup',
  'Small / Medium Business (SME)',
  'School / Educational Institution',
  'Recruitment Firm',
  'Clinic / Healthcare',
  'Real Estate',
  'Local Business',
  'Enterprise / Growing Company',
];

const projectTypeOptions: ProjectTypeOption[] = [
  'Custom Web Application',
  'Business Management System / ERP',
  'CRM Platform',
  'Professional Website',
  'AI Integration & LLM Systems',
  'Business Workflow Automation',
  'WhatsApp Business Automation',
  'API & Cloud Infrastructure',
];

const budgetOptions: BudgetOption[] = [
  'Under ₹25,000',
  '₹25,000–₹50,000',
  '₹50,000–₹1,00,000',
  '₹1,00,000+',
  "Let's Discuss",
];

export const ContactPage: React.FC = () => {
  const { config } = useSiteConfig();
  const { addLead } = useLeads();

  useSEO({
    title: `Let's Build Your Project | Start a Technical Consultation with ${config.name}`,
    description: `Get in touch with ${config.name}. Share your requirements and receive a comprehensive technical proposal within 24 hours.`,
  });

  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const preselectedProject = searchParams.get('project');
  const preselectedBudget = searchParams.get('budget');
  const preselectedScope = searchParams.get('scope');

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: '',
    projectType: (preselectedService as ProjectTypeOption) || '',
    estimatedBudget: (preselectedBudget as BudgetOption) || '',
    projectDescription: preselectedScope || '',
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize preselected project, service, or estimator scope
  useEffect(() => {
    if (preselectedScope) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: preselectedScope,
        estimatedBudget: (preselectedBudget as BudgetOption) || prev.estimatedBudget,
      }));
    } else if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription || `Inquiring regarding: ${preselectedService}`,
      }));
    } else if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription || `Inquiring regarding a project similar to: ${preselectedProject}`,
      }));
    }
  }, [preselectedService, preselectedProject, preselectedScope, preselectedBudget]);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company or organization name is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select your project category';
    }

    if (!formData.estimatedBudget) {
      newErrors.estimatedBudget = 'Please select an estimated budget tier';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief summary of your project requirements';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check: If bot filled hidden field, silently reject
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate enterprise API submission with secure client-side handling
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Save to reactive Inbound Lead CRM Context
      addLead(formData);

      // Asynchronous webhook dispatch if user configured one
      if (config.webhookUrl) {
        try {
          fetch(config.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: 'new_lead_inquiry',
              source: `${config.name} Web Portal`,
              lead: formData,
              submittedAt: new Date().toISOString(),
            }),
          }).catch(() => {
            // Non-blocking webhook failure
          });
        } catch {
          // Non-blocking
        }
      }

      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#06b6d4', '#10b981', '#6366f1'],
        });
      } catch {
        // Fallback gracefully if canvas context is unavailable
      }
    } catch {
      setSubmitError('Unable to transmit request. Please try again or email us directly at ' + config.contact.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Let's Build Your Project"
          title="Start Your Project With An Engineering Partner"
          subtitle="Share your business requirements below. We will review your goals, conduct a preliminary technical analysis, and schedule a scoping consultation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10">
              {isSubmitted ? (
                /* Success State (Requirement #18) */
                <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      🎉 Thank you! Your project request has been received.
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      We&apos;ll review your requirements and get back to you soon.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-left space-y-3 max-w-md mx-auto">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block">
                      What Happens Next?
                    </span>
                    <ol className="space-y-2 text-xs text-slate-700 dark:text-slate-300 list-decimal list-inside">
                      <li>Our team reviews your project requirements.</li>
                      <li>We prepare an estimated timeline and solution plan.</li>
                      <li>We reach out via email or phone within 24 hours to schedule your call.</li>
                    </ol>
                  </div>

                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        businessType: '',
                        projectType: '',
                        estimatedBudget: '',
                        projectDescription: '',
                        honeypot: '',
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Honeypot Spam Field (Hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_comment">Do not fill this field</label>
                    <input
                      type="text"
                      id="hp_comment"
                      name="hp_comment"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      error={errors.fullName}
                    />
                    <Input
                      label="Work Email"
                      type="email"
                      placeholder="rahul@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                    />
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      error={errors.phone}
                    />
                    <Input
                      label="Company Name"
                      placeholder="e.g. Apex Health Ventures"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      error={errors.companyName}
                    />
                  </div>

                  {/* Row 3: Business Type & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Select
                      label="Business Type"
                      required
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({ ...formData, businessType: e.target.value as BusinessTypeOption })
                      }
                      options={[
                        { value: '', label: 'Select your business category...' },
                        ...businessTypeOptions.map((b) => ({ value: b, label: b })),
                      ]}
                      error={errors.businessType}
                    />

                    <Select
                      label="Project Type"
                      required
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value as ProjectTypeOption })
                      }
                      options={[
                        { value: '', label: 'Select primary solution needed...' },
                        ...projectTypeOptions.map((p) => ({ value: p, label: p })),
                      ]}
                      error={errors.projectType}
                    />
                  </div>

                  {/* Row 4: Estimated Budget (INR tiers) */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Estimated Budget <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {budgetOptions.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, estimatedBudget: tier })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                            formData.estimatedBudget === tier
                              ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-dark-surface border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                    {errors.estimatedBudget && (
                      <p className="text-xs text-red-500 font-medium mt-1.5">{errors.estimatedBudget}</p>
                    )}
                  </div>

                  {/* Row 5: Project Description */}
                  <Textarea
                    label="Project Description & Requirements"
                    placeholder="Describe what workflows you want to digitize or automate, key features required, and any target deadlines..."
                    rows={5}
                    required
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    error={errors.projectDescription}
                    helperText="Please share details on user roles, third-party integrations, or current challenges."
                  />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full justify-center shadow-xl shadow-brand-600/20"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      {config.cta.primary}
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                    We value your confidentiality. Strict Mutual NDA applied automatically upon inquiry.
                  </p>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Trust Badges & Direct Office Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7 space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/80 dark:border-dark-border/80">
                Direct Engineering Channels
              </h4>

              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-dark-surface text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Project Inquiries
                    </span>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {config.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-dark-surface text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${config.contact.phone}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {config.contact.displayPhone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-dark-surface text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Availability
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {config.contact.workingHours}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-dark-surface text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Headquarters
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {config.contact.location}
                    </span>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-7 space-y-4 bg-gradient-to-br from-brand-500/5 via-slate-50 to-indigo-500/5 dark:from-brand-950/20 dark:via-dark-card dark:to-dark-surface">
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <ShieldCheck className="w-5 h-5" />
                <h5 className="font-bold text-sm tracking-wide text-brand-700 dark:text-brand-300">
                  The {config.name} Partnership Guarantee
                </h5>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span>100% intellectual property & source code transferred to client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span>No proprietary vendor lock-in or recurring per-seat fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span>Direct communication with senior engineers, not sales middle-men</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
