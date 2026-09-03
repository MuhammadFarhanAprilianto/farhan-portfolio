'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import BentoGridRow1 from '@/components/BentoGridRow1';
import BentoGridRow2 from '@/components/BentoGridRow2';
import ProjectsSection from '@/components/ProjectsSection';
import EducationExperienceSection from '@/components/EducationExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';
import CmsEditorModal from '@/components/CmsEditorModal';
import defaultPortfolioData from '../../public/data/portfolio-data.json';

export default function Home() {
  const [portfolioData, setPortfolioData] = useState(defaultPortfolioData);
  const [lang, setLang] = useState('en'); // 'en' or 'id_lang'
  const [theme, setTheme] = useState('light');
  const [cmsModalOpen, setCmsModalOpen] = useState(false);

  // Sync with any dynamic runtime updates from public/data/portfolio-data.json if available
  useEffect(() => {
    document.title = 'FarhanPortfolio';
    fetch('/data/portfolio-data.json')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object') {
          setPortfolioData(data);
        }
      })
      .catch(err => {
        // Fallback gracefully to bundled JSON data
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] bg-dot-grid text-slate-900 transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar
        data={portfolioData}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenCms={() => setCmsModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Hero Banner */}
        <HeroBanner data={portfolioData} lang={lang} />

        {/* Bento Grid Row 1 (Profile Card, Stats, 32 Tech Stack Grid) */}
        <BentoGridRow1 data={portfolioData} lang={lang} />

        {/* Bento Grid Row 2 (Technical Expertise & Services Grid) */}
        <BentoGridRow2 data={portfolioData} lang={lang} />

        {/* Featured Projects Section */}
        <ProjectsSection data={portfolioData} lang={lang} />

        {/* Education & Experience Timeline Stream Section */}
        <EducationExperienceSection data={portfolioData} lang={lang} />

        {/* Licenses & Certificates Section */}
        <CertificatesSection data={portfolioData} lang={lang} />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />

      {/* Live Local CMS JSON Editor Modal */}
      {cmsModalOpen && (
        <CmsEditorModal
          data={portfolioData}
          onUpdateData={updated => {
            setPortfolioData(updated);
          }}
          onClose={() => setCmsModalOpen(false)}
        />
      )}

    </div>
  );
}
