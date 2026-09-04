import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContactFormData } from '../types/contact';

export type LeadStatus =
  | 'New Lead'
  | 'In Review'
  | 'Contacted'
  | 'Proposal Sent'
  | 'Closed / Won'
  | 'Archived';

export interface Lead {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  projectType: string;
  estimatedBudget: string;
  projectDescription: string;
  status: LeadStatus;
  notes: string[];
}

interface LeadContextType {
  leads: Lead[];
  addLead: (data: ContactFormData) => Lead;
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  addLeadNote: (id: string, note: string) => void;
  deleteLead: (id: string) => void;
  exportLeadsCSV: () => void;
}

const STORAGE_KEY = 'nexora_inbound_leads';

const defaultStarterLeads: Lead[] = [
  {
    id: 'lead-001',
    submittedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: 'Vikram Mehta',
    email: 'vikram@apolloclinicpartners.com',
    phone: '+91 98450 11223',
    companyName: 'Apollo Health Partners',
    businessType: 'Clinic / Healthcare',
    projectType: 'Appointment Management System',
    estimatedBudget: '₹1,00,000+',
    projectDescription: 'We operate 4 specialized polyclinics and need a multi-doctor appointment booking portal with automatic WhatsApp confirmation reminders to reduce patient no-shows.',
    status: 'In Review',
    notes: ['Initial scope reviewed. Recommended 8-week delivery with Meta WhatsApp Cloud API.'],
  },
  {
    id: 'lead-002',
    submittedAt: new Date(Date.now() - 3600000 * 26).toISOString(),
    fullName: 'Ananya Deshmukh',
    email: 'ananya@talentsyncsearch.com',
    phone: '+91 97112 34567',
    companyName: 'TalentSync Global',
    businessType: 'Recruitment Firm',
    projectType: 'Custom Web Application',
    estimatedBudget: '₹50,000–₹1,00,000',
    projectDescription: 'Need a customized candidate evaluation scorecard system for our 12 recruiters, with resume upload and automated interview conflict detection.',
    status: 'Proposal Sent',
    notes: ['Shared technical architecture diagram. SOW pending executive approval.'],
  },
  {
    id: 'lead-003',
    submittedAt: new Date(Date.now() - 3600000 * 50).toISOString(),
    fullName: 'Siddharth Roy',
    email: 'siddharth@edusmartacademy.in',
    phone: '+91 99001 88776',
    companyName: 'EduSmart Group of Schools',
    businessType: 'School / Educational Institution',
    projectType: 'Business Management System / ERP',
    estimatedBudget: '₹1,00,000+',
    projectDescription: 'Looking to replace paper-based student fee reconciliation and parent communication with a unified administrative dashboard.',
    status: 'Contacted',
    notes: ['Conducted initial 30-min discovery call. High intent client.'],
  }
];

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore
    }
    return defaultStarterLeads;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch {
      // Ignore
    }
  }, [leads]);

  const addLead = (data: ContactFormData): Lead => {
    const newLead: Lead = {
      id: `lead-${Date.now().toString(36)}`,
      submittedAt: new Date().toISOString(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      businessType: data.businessType || 'General Inquiry',
      projectType: data.projectType || 'Custom Project',
      estimatedBudget: data.estimatedBudget || "Let's Discuss",
      projectDescription: data.projectDescription,
      status: 'New Lead',
      notes: [],
    };

    setLeads((prev) => [newLead, ...prev]);
    return newLead;
  };

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const addLeadNote = (id: string, note: string) => {
    if (!note.trim()) return;
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              notes: [
                ...lead.notes,
                `[${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}] ${note.trim()}`,
              ],
            }
          : lead
      )
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      'ID',
      'Date Submitted',
      'Full Name',
      'Email',
      'Phone',
      'Company Name',
      'Business Type',
      'Project Type',
      'Budget',
      'Status',
      'Description',
    ];

    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.submittedAt).toLocaleString()}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.companyName.replace(/"/g, '""')}"`,
      `"${l.businessType}"`,
      `"${l.projectType}"`,
      `"${l.estimatedBudget}"`,
      `"${l.status}"`,
      `"${l.projectDescription.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        addLead,
        updateLeadStatus,
        addLeadNote,
        deleteLead,
        exportLeadsCSV,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = (): LeadContextType => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
};
