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

export default function Home() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [lang, setLang] = useState('en'); // 'en' or 'id_lang'
  const [theme, setTheme] = useState('light');
  const [cmsModalOpen, setCmsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Dynamic Client-side Fetch of Local CMS portfolio-data.json
  useEffect(() => {
    document.title = 'FarhanPortfolio';
    fetch('/data/portfolio-data.json')
      .then(res => res.json())
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load portfolio-data.json:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-2xl border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
        <div className="mt-4 font-mono text-xs text-slate-600 tracking-wider uppercase">
          FETCHING PORTFOLIO DATA...
        </div>
      </div>
    );
  }

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
