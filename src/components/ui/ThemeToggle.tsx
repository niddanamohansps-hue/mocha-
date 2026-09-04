import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100/80 dark:bg-dark-surface/80 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4.5 h-4.5 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4.5 h-4.5 text-slate-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
