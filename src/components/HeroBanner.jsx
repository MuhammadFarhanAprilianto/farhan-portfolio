'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ScrollColorImage from '@/components/ScrollColorImage';

export default function HeroBanner({ data, lang }) {
  const heroData = data?.hero || {};
  const profile = data?.profile || {};
  const isEn = lang === 'en';

  const headline = heroData.headline || 'Building Digital Products & Experiences.';
  const subheadline =
    heroData.subheadline?.[lang] ||
    heroData.subheadline?.en ||
    'a final-year Informatics Engineering student at Universitas Pancasila specializing in Web Development (Next.js, Flutter, Laravel) and UI/UX Design (Figma)...';
  const name = profile.name || 'Muhammad Farhan Aprilianto';
  const location = profile.location || 'Jakarta';
  const avatarUrl = profile.avatar || '/avatar.svg';

  // Interactive 3D tilt calculations
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 20);
    setRotateY(x / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvUrl = '/CV_Muhammad_Farhan_Aprilianto.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Muhammad_Farhan_Aprilianto.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="pt-8 pb-12 overflow-visible scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headline, Bio & Action Buttons (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Main Headline (Agrandir font) */}
          <h1 className="font-agrandir font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12]">
            {headline}
          </h1>

          {/* Subheadline & Shortened Biography (Questrial font) */}
          <p className="font-questrial text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
            Hi, I'm <strong className="font-bold text-slate-900">{name}</strong>. {subheadline}
          </p>

          {/* Action Buttons (View Projects & Download CV) */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wider shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition-all"
            >
              <span>{isEn ? 'View Projects' : 'Lihat Proyek'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-900/20 bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 font-bold text-xs tracking-wider transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isEn ? 'Download CV' : 'Download CV'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Tilted & Floating Profile Card (5 cols on lg) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -4.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -3.5,
              y: [0, -10, 0],
            }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.7 },
              scale: { duration: 0.7 },
            }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[1/1.08] rounded-[2rem] overflow-hidden border border-slate-900/15 shadow-2xl shadow-slate-900/30 bg-slate-950 group cursor-pointer select-none"
          >
            {/* Image / Photo */}
            <div className="relative w-full h-full overflow-hidden">
              <ScrollColorImage
                src={avatarUrl}
                alt={name}
                hoverClass="group-hover:grayscale-0"
                baseClass="grayscale contrast-125"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Profile Info Overlay at Bottom-Left (Matching Reference Image) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 space-y-1.5 text-left bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent">
              <div className="font-mono text-sm sm:text-base font-black tracking-widest text-white uppercase">
                {name}
              </div>
              <p className="font-questrial text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Informatics Engineering Student & Web Developer based in {location}.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
