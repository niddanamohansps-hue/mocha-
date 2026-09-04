import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { CTASection } from '../components/sections/CTASection';
import { useSiteConfig } from '../context/SiteConfigContext';
import { useSEO } from '../hooks/useSEO';

export const HomePage: React.FC = () => {
  const { config } = useSiteConfig();

  useSEO({
    title: `${config.name} | ${config.tagline}`,
    description: config.valueProposition,
  });

  return (
    <div className="animate-in fade-in duration-300">
      <HeroSection />
      <TrustSection />
      <ServicesGrid limit={8} />
      <FeaturedProjects />
      <ProcessTimeline />
      <CTASection />
    </div>
  );
};
