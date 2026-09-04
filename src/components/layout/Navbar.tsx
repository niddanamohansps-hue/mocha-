import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';
import { useSiteConfig } from '../../context/SiteConfigContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const { config } = useSiteConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-slate-200/80 dark:border-dark-border/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-accent-cyan flex items-center justify-center text-white shadow-md shadow-brand-600/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {config.name}
              </span>
              <span className="text-[11px] font-medium tracking-normal text-slate-500 dark:text-slate-400 -mt-0.5">
                Digital Solutions & Growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {config.mainNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative',
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-dark-surface/50'
                  )}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Button
              to="/contact"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {config.cta.navbar}
            </Button>
          </div>

          {/* Mobile Actions: ThemeToggle + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100/80 dark:bg-dark-surface/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-slate-200 dark:border-dark-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="space-y-1">
            {config.mainNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block px-4 py-3.5 rounded-xl text-base font-semibold transition-all',
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-surface'
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-200 dark:border-dark-border space-y-4">
            <Button
              to="/contact"
              variant="glow"
              size="lg"
              className="w-full justify-center"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {config.cta.navbar}
            </Button>
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              {config.subTagline}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
