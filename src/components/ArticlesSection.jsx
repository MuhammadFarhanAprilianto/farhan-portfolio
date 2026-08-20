'use client';

import { BookOpen, ArrowUpRight, Clock } from 'lucide-react';

export default function ArticlesSection({ data, lang }) {
  const articles = data?.articles || [];
  const isEn = lang === 'en';

  return (
    <section id="articles" className="py-12 border-t border-[#1f1f23] my-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isEn ? 'PUBLICATIONS & WRITING' : 'ARTIKEL & TULISAN'}</span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          {isEn ? 'Articles & Thoughts' : 'Artikel & Pemikiran'}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
          {isEn
            ? 'Writing on frontend architecture, blueprint UI design, and developer tools.'
            : 'Tulisan tentang arsitektur frontend, desain UI blueprint, dan alat bantu developer.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => {
          const title = article.title?.[lang] || article.title?.en || '';
          const excerpt = article.excerpt?.[lang] || article.excerpt?.en || '';

          return (
            <a
              key={article.id || idx}
              href={article.url || '#'}
              target="_blank"
              rel="noreferrer"
              className="bento-card p-6 md:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-4">
                  <span>{title}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </h3>

                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f1f23] flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>PUBLISHED: {article.date}</span>
                <span className="text-cyan-400 group-hover:underline">READ ARTICLE &rarr;</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
