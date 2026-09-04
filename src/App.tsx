import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SiteConfigProvider } from './context/SiteConfigContext';
import { LeadProvider } from './context/LeadContext';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { AdminPage } from './pages/AdminPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function App() {
  return (
    <SiteConfigProvider>
      <LeadProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/estimator" element={<EstimatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            {/* Catch-all 404 redirects to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </LeadProvider>
    </SiteConfigProvider>
  );
}

export default App;
