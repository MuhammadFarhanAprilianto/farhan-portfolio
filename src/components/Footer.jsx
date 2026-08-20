'use client';

import { Mail, Github, Linkedin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer({ data }) {
  const email = data?.profile?.email || 'farhankey666@gmail.com';
  const whatsapp = data?.profile?.whatsapp || 'https://wa.me/6285732021121';
  const github = data?.footer?.socials?.github || 'https://github.com/MuhammadFarhanAprilianto';
  const linkedin = data?.footer?.socials?.linkedin || 'https://www.linkedin.com/in/farhan2004/';
  const instagram = data?.profile?.instagram || 'https://instagram.com/frhanap_';

  return (
    <footer id="contact" className="pt-16 pb-16 scroll-mt-24 w-full">
      {/* Centered Constrained Container for Contact Bento Grid */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">

        {/* Top Centered Horizontal Divider Line */}
        <div className="w-full border-t border-slate-900/15" />
        
        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: GET IN TOUCH & Let's work together */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block">
              GET IN TOUCH
            </span>
            <h2 className="font-agrandir font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none">
              Let's work together.
            </h2>
            <p className="font-questrial text-sm text-slate-600 leading-relaxed max-w-sm pt-1">
              Have a project in mind, need a developer, or just want to connect? Feel free to reach out.
            </p>
          </div>

          {/* Right Column: Direct Email Bento Card + 4 Social Bento Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Direct Email Card */}
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
              className="bento-card p-5 sm:p-6 flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-blue-600/40 shadow-sm rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="font-agrandir font-black text-sm sm:text-base md:text-lg text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight break-all sm:break-normal">
                    {email}
                  </span>
                </div>
              </div>

              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Bottom Social Media Cards Grid (4 items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              
              {/* WhatsApp Card */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 sm:p-5 flex flex-col items-center justify-center gap-2.5 group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-emerald-600 shadow-sm rounded-2xl"
              >
                <MessageCircle className="w-5 h-5 text-slate-800 group-hover:text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-emerald-600 tracking-wider">
                  WhatsApp
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 sm:p-5 flex flex-col items-center justify-center gap-2.5 group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-slate-900 shadow-sm rounded-2xl"
              >
                <Github className="w-5 h-5 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-slate-900 tracking-wider">
                  GitHub
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 sm:p-5 flex flex-col items-center justify-center gap-2.5 group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-blue-600 shadow-sm rounded-2xl"
              >
                <Linkedin className="w-5 h-5 text-slate-800 group-hover:text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-blue-600 tracking-wider">
                  LinkedIn
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 sm:p-5 flex flex-col items-center justify-center gap-2.5 group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-pink-600 shadow-sm rounded-2xl"
              >
                <Instagram className="w-5 h-5 text-slate-800 group-hover:text-pink-600 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-pink-600 tracking-wider">
                  Instagram
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Full-width Divider & Pushed-Down Copyright Row (Matching Reference Image 1) */}
      <div className="w-full border-t border-slate-900/20 mt-20 pt-16 pb-6 text-center">
        <p className="font-mono text-xs font-bold text-slate-500 tracking-widest uppercase">
          © 2026 Muhammad Farhan Aprilianto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
