'use client';

import { Compass, CheckCircle, Clock, Calendar } from 'lucide-react';

export default function RoadmapSection({ data, lang }) {
  const roadmap = data?.roadmap || [];
  const isEn = lang === 'en';

  const getStatusBadge = status => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>In Progress</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Planned</span>
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-12 border-t border-[#1f1f23] my-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-400 uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>{isEn ? 'ENGINEERING ROADMAP' : 'PETA JALAN ENGINEERING'}</span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          {isEn ? 'Future Milestones' : 'Milestone Masa Depan'}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
          {isEn
            ? 'Strategic engineering objectives and open-source release roadmap.'
            : 'Tujuan strategis engineering dan peta jalan rilis open-source.'}
        </p>
      </div>

      <div className="space-y-4">
        {roadmap.map((item, idx) => {
          const title = item.title?.[lang] || item.title?.en || '';
          const desc = item.description?.[lang] || item.description?.en || '';

          return (
            <div
              key={idx}
              className="bento-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-purple-500/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-purple-400 tracking-wider">
                      {item.quarter}
                    </span>
                    {getStatusBadge(item.status)}
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-white mt-1 group-hover:text-purple-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block text-right">
                <span className="text-[10px] font-mono text-gray-500 block">MILESTONE #{idx + 1}</span>
                <span className="text-xs font-mono text-gray-400">BLUEPRINT V2.4</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
