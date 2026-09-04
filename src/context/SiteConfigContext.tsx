import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, siteConfig as defaultSiteConfig } from '../config/site';

interface SiteConfigContextType {
  config: SiteConfig;
  updateConfig: (partial: Partial<SiteConfig>) => void;
  updateContact: (partial: Partial<SiteConfig['contact']>) => void;
  updateLinks: (partial: Partial<SiteConfig['links']>) => void;
  resetConfig: () => void;
}

const STORAGE_KEY = 'nexora_custom_site_config';

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...defaultSiteConfig,
          ...parsed,
          contact: { ...defaultSiteConfig.contact, ...(parsed.contact || {}) },
          links: { ...defaultSiteConfig.links, ...(parsed.links || {}) },
        };
      }
    } catch {
      // Ignore parsing errors
    }
    return defaultSiteConfig;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage errors
    }
  }, [config]);

  const updateConfig = (partial: Partial<SiteConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...partial,
    }));
  };

  const updateContact = (partial: Partial<SiteConfig['contact']>) => {
    setConfig((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        ...partial,
      },
    }));
  };

  const updateLinks = (partial: Partial<SiteConfig['links']>) => {
    setConfig((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        ...partial,
      },
    }));
  };

  const resetConfig = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(defaultSiteConfig);
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        updateConfig,
        updateContact,
        updateLinks,
        resetConfig,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = (): SiteConfigContextType => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
};
