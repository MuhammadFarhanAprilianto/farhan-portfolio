'use client';

import { Award, Trophy, Star } from 'lucide-react';

export default function AchievementsSection({ data, lang }) {
  const achievements = data?.achievements || [];
  const isEn = lang === 'en';

  return (
    <section id="experience" className="py-12 border-t border-[#1f1f23] my-8 scroll-mt-24">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-widest mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>{isEn ? 'HONORS & RECOGNITIONS' : 'PENGHARGAAN & ANUGERAH'}</span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          {isEn ? 'Engineering Achievements' : 'Pencapaian Engineering'}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
          {isEn
            ? 'Industry recognitions, awards, and key milestone benchmarks.'
            : 'Pengakuan industri, penghargaan, dan tolok ukur pencapaian utama.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => {
          const title = item.title?.[lang] || item.title?.en || '';
          const desc = item.description?.[lang] || item.description?.en || '';

          return (
            <div key={item.id || idx} className="bento-card p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    {item.year}
                  </span>
                  <Star className="w-4 h-4 text-amber-400 group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-amber-300 transition-colors">
                  {title}
                </h3>
                <div className="text-xs font-mono text-gray-500 mt-1">
                  ISSUED BY: {item.issuer}
                </div>

                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f1f23] flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>VERIFIED RECOGNITION</span>
                <Award className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
