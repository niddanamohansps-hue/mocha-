import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};
