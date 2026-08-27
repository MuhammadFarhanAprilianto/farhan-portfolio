'use client';

import { useState, useRef } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Building2, 
  Layers, 
  Award, 
  Smartphone, 
  CheckCircle2, 
  Globe, 
  ChevronDown,
  ChevronsUpDown
} from 'lucide-react';

export default function EducationExperienceSection({ data, lang }) {
  const isEn = lang === 'en';
  const scrollContainerRef = useRef(null);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setCanScrollDown(false);
    } else {
      setCanScrollDown(true);
    }
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 220, behavior: 'smooth' });
    }
  };

  const educationList = [
    {
      id: 'edu-1',
      period: '2022 — 2026',
      badge: 'Fresh Graduate',
      institution: 'Universitas Pancasila',
      degree: 'S1 - Teknik Informatika',
      gpa: 'GPA: 3.39 / 4.00',
      bullets: [
        'Spesialisasi dalam Full-Stack Web Development (Next.js, Laravel), Mobile Development (Flutter), dan UI/UX Design (Figma).'
      ],
      icon: GraduationCap,
    },
    {
      id: 'edu-2',
      period: '15 July 2019 – 3 June 2022',
      badge: 'SMK / Multimedia',
      institution: 'SMK AL-FALAH PLOSO MOJO KEDIRI',
      degree: 'Multimedia',
      gpa: 'Final Average Score: 81.48',
      bullets: [
        'Participated in the Competency Test (Ujikom) in the field of short film making which is recognized with official certification from the P1 Vocational Certification Institute of QUEEN AL FALAH Vocational School.',
        'Achieved a final average score of 81.48'
      ],
      icon: Building2,
    },
  ];

  // Sorted strictly from Newest to Oldest (2026 -> 2025 -> 2024 -> 2023)
  const experienceList = [
    {
      id: 'exp-labs',
      period: 'July – August 2026',
      duration: '2 Months',
      typeBadge: 'Creative Web',
      company: 'Research Developer Independent – LabsStdio (Creative Studio & Web Platform)',
      role: 'Front-End / Creative Web Developer & UI/UX Designer',
      bullets: [
        'Designed and engineered a modern creative digital studio platform and interactive portfolio showcase utilizing Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.',
        'Built interactive 3D WebGL particle wave and dynamic handshake dot-matrix background animations using Three.js and custom canvas shaders.',
        'Implemented ultra-smooth kinetic scrolling with Lenis and scroll-triggered micro-interactions using Framer Motion, including expanding video cards, service carousels, and portfolio showcases.'
      ],
      icon: Globe,
    },
    {
      id: 'exp-muqi',
      period: 'June – August 2026',
      duration: '3 Months',
      typeBadge: 'Mobile App',
      company: 'Research Developer Independent – MUQI (Mobile Islamic & Tahfizh Learning App)',
      role: 'Lead Mobile Developer & UI/UX Designer',
      bullets: [
        'Designed UI/UX user flows, interactive mobile wireframes in Figma, and complete system architecture supporting dual-portal access (Guru/Asatidz & Wali Murid).',
        'Developed cross-platform mobile application using Flutter (Dart) and MongoDB Atlas Cloud Database (TLS 1.3/SSL encryption) for real-time tahfizh assessment, attendance, and daily mutaba\'ah tracking.',
        'Implemented custom Murottal audio player (speed control & duration slider), SHA-256 secure authentication, gamified achievement badges, and automated official student report card (Rapor) PDF export.'
      ],
      icon: Smartphone,
    },
    {
      id: 'exp-1',
      period: 'February – July 2026',
      duration: '6 Months',
      typeBadge: 'Mobile POS',
      company: 'Research Developer Independent – GadoGado_App (F&B POS & Inventory System)',
      role: 'Lead Mobile Developer & UI/UX Designer',
      bullets: [
        'Designed UI/UX user flows, interactive wireframes, and system architecture (UML & ERD) for an Android-based digital Point of Sale (POS) system.',
        'Developed cross-platform mobile app using Flutter, Cloud Firestore, and Supabase Storage featuring automatic raw material inventory deduction based on menu recipes.',
        'Built real-time delivery status tracking and visual sales report dashboards with PDF export capability.'
      ],
      icon: Smartphone,
    },
    {
      id: 'exp-2',
      period: 'January – April 2026',
      duration: '4 Months',
      typeBadge: 'E-Commerce',
      company: 'Research Developer Independent – NOXICK Studio (Custom Apparel E-Commerce Platform)',
      role: 'Full-Stack Web Developer & UI/UX Designer',
      bullets: [
        'Designed and engineered a digital design studio & e-commerce platform (NOXICK Streetwear) using Next.js 16 (App Router), React 19, Tailwind CSS, and MySQL.',
        'Integrated Midtrans Payment Gateway client to process automated down payments (DP) and full transaction settlements.',
        'Implemented secure user authentication using JWT (JSON Web Token) & bcryptjs, along with a custom order management dashboard for admin/developers.',
        'Created a modern streetwear-style digital store interface in Figma and translated it into interactive, responsive web components.'
      ],
      icon: Award,
    },
    {
      id: 'exp-3',
      period: 'August 2025 – January 2026',
      duration: '6 Months',
      typeBadge: 'System Analyst',
      company: 'Research Developer Independent – Nyapah Banyu (Agricultural Operations Web System)',
      role: 'Full-Stack Web Developer & System Analyst',
      bullets: [
        'Architected system design and engineered an integrated web application for plantation operational management using Laravel Framework, PHP, and MySQL.',
        'Built responsive multi-dashboard web interfaces (Owner, Field Manager, & Crop Commodity views) using Blade Templating and CSS.',
        'Developed comprehensive operational modules including nursery management, planting schedules, harvest tracking, logistics, HR/payroll, and real-time activity logs.',
        'Implemented automated report generation and data export features to streamline management decision-making.'
      ],
      icon: Layers,
    },
    {
      id: 'exp-4',
      period: 'February – June 2025',
      duration: '5 Months',
      typeBadge: 'Internship',
      company: 'PT Global Aspect Technology',
      role: 'Web Developer Internship',
      bullets: [
        'Designed high-fidelity UI/UX wireframes and mockups in Figma to ensure intuitive and responsive web user flows.',
        'Implemented web interfaces using Laravel framework, Blade Templating, and Tailwind CSS.',
        'Managed web hosting, application deployment on Hostinger, and MySQL database configuration.',
        'Compiled internal technical documentation and presented final project deliverables to the development team.'
      ],
      icon: Briefcase,
    },
    {
      id: 'exp-5',
      period: 'May – July 2023',
      duration: '3 Months',
      typeBadge: 'Bootcamp',
      company: 'MySkill.com',
      role: 'UI/UX Research & Design Intensive Bootcamp Participant',
      bullets: [
        'Mastered and applied UX Research methodologies, Information Architecture, Wireframing, High-Fidelity Prototyping, and Design Systems in Figma.',
        'Built UI/UX design portfolios through real-world case studies and industry-standard design workflows.'
      ],
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="py-12 border-t border-slate-900/10 my-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10 text-left space-y-1">
        <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          BACKGROUND
        </span>
        <h2 className="font-agrandir font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Education & Experience.
        </h2>
      </div>

      {/* 2-Column Grid: Education on left, Experience on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: EDUCATION */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-900/10 pb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              EDUCATION
            </span>
            <span className="text-[11px] font-mono font-medium text-slate-400">
              {educationList.length} Stages
            </span>
          </div>

          {/* Education Timeline Stream */}
          <div className="relative border-l-2 border-slate-900/15 ml-3 pl-6 space-y-8">
            {educationList.map((edu) => {
              const IconComp = edu.icon;
              return (
                <div key={edu.id} className="relative group">
                  {/* Timeline Dot Node Marker */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-900 group-hover:scale-125 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm" />

                  {/* Card Header Row: Icon + Date + Pill Badge */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-slate-900/5 border border-slate-900/10 text-slate-800">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                          {edu.period}
                        </span>
                      </div>

                      <span className="px-3 py-1 rounded-xl text-[11px] font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 uppercase tracking-wider">
                        {edu.badge}
                      </span>
                    </div>

                    {/* Institution & Degree */}
                    <div>
                      <h3 className="font-agrandir font-extrabold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <p className="font-mono text-xs font-semibold text-slate-700">
                          {edu.degree}
                        </p>
                        {edu.gpa && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20">
                            {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-1.5 font-questrial text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {edu.bullets?.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: EXPERIENCE (Scrollable Container) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Header with Title & Interactive Scroll Control */}
          <div className="flex items-center justify-between border-b border-slate-900/10 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                EXPERIENCE
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-900/5 text-slate-600 border border-slate-900/10">
                {experienceList.length} Roles
              </span>
            </div>

            {/* Scroll indicator & quick scroll button */}
            <button
              onClick={scrollToNext}
              type="button"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500 hover:text-blue-600 transition-colors cursor-pointer group px-2.5 py-1 rounded-lg hover:bg-blue-50/60"
              title="Scroll down to see more experiences"
            >
              <ChevronsUpDown className="w-3.5 h-3.5 group-hover:text-blue-600 text-slate-400" />
              <span>Scroll to explore</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Scrollable Timeline Box with Fixed Maximum Height & Smooth Scrollbar */}
          <div className="relative group/box rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-sm">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="max-h-[460px] sm:max-h-[500px] overflow-y-auto overflow-x-hidden pr-2 sm:pr-4 space-y-10 relative scroll-smooth focus:outline-none"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(15, 23, 42, 0.2) transparent',
              }}
            >
              {/* Experience Timeline Stream */}
              <div className="relative border-l-2 border-slate-900/15 ml-3 pl-6 space-y-10">
                {experienceList.map((exp) => {
                  const IconComp = exp.icon;
                  return (
                    <div key={exp.id} className="relative group">
                      {/* Timeline Dot Node Marker */}
                      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-900 group-hover:scale-125 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm" />

                      {/* Card Header Row: Icon + Date/Duration + Type Pill Badge */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-slate-900/5 border border-slate-900/10 text-slate-800">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                              {exp.period} <span className="text-slate-400 font-normal">({exp.duration})</span>
                            </span>
                          </div>

                          <span className="px-3 py-1 rounded-xl text-[11px] font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 uppercase tracking-wider">
                            {exp.typeBadge}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <div>
                          <h3 className="font-agrandir font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="font-mono text-xs font-semibold text-slate-600 mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        {/* Bullet points list */}
                        <ul className="space-y-2 font-questrial text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                          {exp.bullets?.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Gradient Fade Hint when scrollable */}
            {canScrollDown && (
              <div 
                onClick={scrollToNext}
                className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-auto cursor-pointer rounded-b-2xl flex items-end justify-center pb-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-mono font-bold shadow-md hover:bg-blue-600 transition-colors">
                  <span>More below</span>
                  <ChevronDown className="w-3 h-3 animate-bounce" />
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

