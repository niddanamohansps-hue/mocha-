import React, { useState } from 'react';
import {
  Users,
  Sliders,
  Download,
  Search,
  Mail,
  Phone,
  Calendar,
  Save,
  RotateCcw,
  CheckCircle2,
  Trash2,
  Building,
  Plus,
} from 'lucide-react';
import { useLeads, LeadStatus, Lead } from '../context/LeadContext';
import { useSiteConfig } from '../context/SiteConfigContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { useSEO } from '../hooks/useSEO';

const statusOptions: LeadStatus[] = [
  'New Lead',
  'In Review',
  'Contacted',
  'Proposal Sent',
  'Closed / Won',
  'Archived',
];

export const AdminPage: React.FC = () => {
  useSEO({
    title: 'Agency Management Portal & Inbound Lead CRM',
    description: 'Internal management dashboard for reviewing client project inquiries and customizing agency branding settings.',
  });

  const { leads, updateLeadStatus, addLeadNote, deleteLead, exportLeadsCSV } = useLeads();
  const { config, updateConfig, updateContact, updateLinks, resetConfig } = useSiteConfig();

  const [activeTab, setActiveTab] = useState<'leads' | 'settings'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Editable brand settings state
  const [brandForm, setBrandForm] = useState({
    name: config.name,
    shortName: config.shortName,
    tagline: config.tagline,
    subTagline: config.subTagline,
    email: config.contact.email,
    phone: config.contact.phone,
    displayPhone: config.contact.displayPhone,
    location: config.contact.location,
    github: config.links.github,
    linkedin: config.links.linkedin,
    twitter: config.links.twitter,
    webhookUrl: config.webhookUrl || '',
  });

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.projectType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      name: brandForm.name,
      shortName: brandForm.shortName,
      tagline: brandForm.tagline,
      subTagline: brandForm.subTagline,
      webhookUrl: brandForm.webhookUrl,
    });
    updateContact({
      email: brandForm.email,
      phone: brandForm.phone,
      displayPhone: brandForm.displayPhone,
      location: brandForm.location,
    });
    updateLinks({
      github: brandForm.github,
      linkedin: brandForm.linkedin,
      twitter: brandForm.twitter,
    });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const getStatusBadgeVariant = (status: LeadStatus) => {
    switch (status) {
      case 'New Lead':
        return 'brand';
      case 'In Review':
        return 'cyan';
      case 'Contacted':
        return 'amber';
      case 'Proposal Sent':
        return 'violet';
      case 'Closed / Won':
        return 'emerald';
      case 'Archived':
      default:
        return 'neutral';
    }
  };

  return (
    <div className="animate-in fade-in duration-300 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200 dark:border-dark-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Agency Control Center
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {config.name} Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Live inbound CRM, lead tracking, and instantaneous brand customization.
            </p>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-dark-surface p-1 rounded-xl border border-slate-200 dark:border-dark-border">
            <button
              onClick={() => setActiveTab('leads')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'leads'
                  ? 'bg-white dark:bg-dark-card text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Inbound Leads ({leads.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'settings'
                  ? 'bg-white dark:bg-dark-card text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Live Brand Customizer</span>
            </button>
          </div>
        </div>

        {/* TAB 1: LEADS CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Metric Overview Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card className="p-4 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Total Inquiries</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {leads.length}
                </span>
              </Card>
              <Card className="p-4 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">New Leads</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {leads.filter((l) => l.status === 'New Lead').length}
                </span>
              </Card>
              <Card className="p-4 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">In Review</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {leads.filter((l) => l.status === 'In Review').length}
                </span>
              </Card>
              <Card className="p-4 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">Closed / Won</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {leads.filter((l) => l.status === 'Closed / Won').length}
                </span>
              </Card>
            </div>

            {/* Filter Bar & Export */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-dark-card p-4 rounded-2xl border border-slate-200 dark:border-dark-border">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by client, company, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Status Filter and Export Button */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  aria-label="Filter inquiries by status"
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <Button
                  onClick={exportLeadsCSV}
                  variant="outline"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Leads Table / Cards */}
            {filteredLeads.length === 0 ? (
              <Card className="p-12 text-center space-y-3">
                <Users className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">No inquiries found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  New project requests submitted through the contact page will automatically appear here.
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredLeads.map((lead) => (
                  <Card key={lead.id} className="p-5 sm:p-6 transition-all hover:border-slate-300">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-dark-border/60">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="font-bold text-slate-900 dark:text-white text-base">
                            {lead.fullName}
                          </h3>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                            <Building className="w-3.5 h-3.5 text-slate-400" />
                            {lead.companyName}
                          </span>
                          <Badge variant={getStatusBadgeVariant(lead.status)} size="sm">
                            {lead.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {new Date(lead.submittedAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                          <span>Industry: {lead.businessType}</span>
                          <span className="text-brand-600 dark:text-brand-400 font-semibold">
                            Budget: {lead.estimatedBudget}
                          </span>
                        </div>
                      </div>

                      {/* Action & Status Transition */}
                      <div className="flex items-center gap-3">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                          aria-label="Update lead status"
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border focus:outline-none"
                        >
                          {statusOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>

                        <button
                          onClick={() => setSelectedLead(selectedLead?.id === lead.id ? null : lead)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60"
                        >
                          {selectedLead?.id === lead.id ? 'Close Details' : 'View Scope & Notes'}
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm('Delete this inquiry?')) {
                              deleteLead(lead.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                          aria-label="Delete inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="pt-3 flex flex-wrap items-center gap-4 text-xs">
                      <a
                        href={`mailto:${lead.email}`}
                        className="inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400 hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lead.email}</span>
                      </a>
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lead.phone}</span>
                      </a>
                    </div>

                    {/* Expanded Scope & Internal Notes */}
                    {selectedLead?.id === lead.id && (
                      <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-dark-border/80 space-y-4 animate-in fade-in duration-200">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                            Full Project Description:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-dark-surface p-3.5 rounded-xl border border-slate-200/60 dark:border-dark-border/60">
                            {lead.projectDescription}
                          </p>
                        </div>

                        {/* Notes Section */}
                        <div className="space-y-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Internal Engineering Notes:
                          </span>
                          {lead.notes.length === 0 ? (
                            <p className="text-xs text-slate-400 italic">No notes recorded yet.</p>
                          ) : (
                            <div className="space-y-1.5">
                              {lead.notes.map((n, i) => (
                                <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                  <span className="text-brand-500 font-bold">•</span>
                                  <span>{n}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center gap-2 pt-2">
                            <input
                              type="text"
                              placeholder="Add an internal note (e.g. called client, sent pricing)..."
                              value={newNote}
                              onChange={(e) => setNewNote(e.target.value)}
                              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border focus:outline-none"
                            />
                            <Button
                              onClick={() => {
                                if (newNote.trim()) {
                                  addLeadNote(lead.id, newNote);
                                  setNewNote('');
                                }
                              }}
                              variant="secondary"
                              size="sm"
                              leftIcon={<Plus className="w-3.5 h-3.5" />}
                            >
                              Add Note
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LIVE BRAND CUSTOMIZER */}
        {activeTab === 'settings' && (
          <div className="max-w-4xl">
            <Card className="p-8 sm:p-10">
              <form onSubmit={handleSaveSettings} className="space-y-8">
                {saveSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Configuration saved successfully! All updates are live across the entire website.</span>
                  </div>
                )}

                {/* Section 1: Brand Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-dark-border">
                    Brand & Positioning
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Company Full Name"
                      value={brandForm.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Short Name / Moniker"
                      value={brandForm.shortName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, shortName: e.target.value })}
                      required
                    />
                  </div>

                  <Input
                    label="Main Tagline"
                    value={brandForm.tagline}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, tagline: e.target.value })}
                    required
                  />

                  <Input
                    label="Sub-Tagline / Value Commitment"
                    value={brandForm.subTagline}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, subTagline: e.target.value })}
                    required
                  />
                </div>

                {/* Section 2: Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-dark-border">
                    Direct Contact Channels
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Primary Inquiries Email"
                      type="email"
                      value={brandForm.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, email: e.target.value })}
                      required
                    />
                    <Input
                      label="Display Phone Number"
                      value={brandForm.displayPhone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, displayPhone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Telephone Raw Number (for tel: links)"
                      value={brandForm.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, phone: e.target.value })}
                      required
                    />
                    <Input
                      label="Office Location / Serving Area"
                      value={brandForm.location}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Section 3: Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-dark-border">
                    Social Media Profiles
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <Input
                      label="GitHub URL"
                      value={brandForm.github}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, github: e.target.value })}
                    />
                    <Input
                      label="LinkedIn URL"
                      value={brandForm.linkedin}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, linkedin: e.target.value })}
                    />
                    <Input
                      label="Twitter / X URL"
                      value={brandForm.twitter}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, twitter: e.target.value })}
                    />
                  </div>
                </div>

                {/* Section 4: Webhook Integration */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-dark-border">
                    Inbound Lead Webhook Integration (Optional)
                  </h3>
                  <Input
                    label="External Webhook URL (Discord / Slack / Zapier / Formspree)"
                    placeholder="https://discord.com/api/webhooks/... or https://hooks.zapier.com/..."
                    value={brandForm.webhookUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandForm({ ...brandForm, webhookUrl: e.target.value })}
                    helperText="When populated, any new client inquiry submitted through /contact will automatically POST to this URL in JSON format."
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Reset all brand and contact configuration to factory defaults?')) {
                        resetConfig();
                        window.location.reload();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All to Defaults</span>
                  </button>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    leftIcon={<Save className="w-4 h-4" />}
                  >
                    Save Live Changes
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
