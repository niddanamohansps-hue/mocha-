import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Lock } from 'lucide-react';
import { useSiteConfig } from '../../context/SiteConfigContext';

export const Footer: React.FC = () => {
  const { config } = useSiteConfig();

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-accent-cyan flex items-center justify-center text-white shadow-md shadow-brand-600/20">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {config.name}
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {config.valueProposition}
            </p>
            <div className="p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 dark:bg-brand-500/10 text-xs font-medium text-brand-700 dark:text-brand-300">
              <span className="font-bold block mb-0.5">Core Brand Commitment:</span>
              &quot;{config.subTagline}&quot;
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={config.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {config.footerNav.solutions.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {config.footerNav.company.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${config.contact.phone}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {config.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>{config.contact.location}</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-dark-border/80">
              <Link
                to="/contact"
                className="text-xs font-semibold text-brand-600 dark:text-brand-400 inline-flex items-center gap-1 hover:underline"
              >
                Book a Scoping Call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {config.name}. All rights reserved. Built with pride for ambitious businesses.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link
              to="/admin"
              className="hover:text-brand-500 font-medium text-xs flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded-full bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border"
            >
              <Lock className="w-3 h-3 text-brand-500" />
              <span>Agency Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
