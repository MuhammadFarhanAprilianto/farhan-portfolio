'use client';

import { Briefcase, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function ExperienceTimeline({ data, lang }) {
  const experiences = data?.experiences || [];
  const isEn = lang === 'en';

  return (
    <section id="experience" className="py-12 border-t border-slate-900/10 my-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10 text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-600 uppercase tracking-widest">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{isEn ? 'CAREER & PROJECT HISTORY' : 'RIWAYAT KARIR & PROYEK'}</span>
        </div>
        <h2 className="font-agrandir font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {isEn ? 'Work Experience & Projects' : 'Pengalaman Kerja & Proyek'}
        </h2>
        <p className="font-questrial text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
          {isEn
            ? 'Track record of engineering web applications, mobile platforms, POS systems, and UI/UX design systems.'
            : 'Rekam jejak pengembangan aplikasi web, platform mobile, sistem kasir (POS), dan sistem desain UI/UX.'}
        </p>
      </div>

      {/* Experience Timeline Stream */}
      <div className="relative border-l-2 border-slate-900/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={exp.id || idx} className="relative group">
            
            {/* Glowing Node Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-md group-hover:scale-125 group-hover:border-cyan-500 transition-all duration-300" />

            {/* Experience Card Container */}
            <div className="bento-card p-6 sm:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300">
              
              {/* Header: Role Title, Company & Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-900/10 pb-4">
                <div>
                  <h3 className="font-agrandir font-extrabold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="font-bold text-sm text-slate-800">{exp.company}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points List */}
              <ul className="space-y-2.5 font-questrial text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                {exp.bullets?.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="pt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 group-hover:border-blue-500/30 group-hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
