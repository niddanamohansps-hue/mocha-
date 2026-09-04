import { useEffect } from 'react';
import { siteConfig } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function useSEO({ title, description, canonicalUrl }: SEOProps) {
  useEffect(() => {
    // Document Title
    const formattedTitle = title 
      ? `${title} | ${siteConfig.name}` 
      : `${siteConfig.name} | ${siteConfig.tagline}`;
    document.title = formattedTitle;

    // Meta Description
    const metaDescription = description || siteConfig.description;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metaDescription);
    }

    // OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);

    // Canonical link
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, canonicalUrl]);
}
