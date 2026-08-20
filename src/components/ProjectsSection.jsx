'use client';

import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollColorImage from '@/components/ScrollColorImage';

export default function ProjectsSection({ data, lang }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = data?.projects || [];
  const isEn = lang === 'en';

  return (
    <section id="work" className="py-12 border-t border-slate-900/10 my-10 scroll-mt-24">
      {/* Section Header (Matching Reference Image 1) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div className="space-y-1 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            SELECTED WORK
          </span>
          <h2 className="font-agrandir font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {isEn ? 'Featured Projects' : 'Proyek Unggulan'}
          </h2>
        </div>

        <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
          2024 — PRESENT
        </span>
      </div>

      {/* Projects Showcase Cards Stack (Matching Reference Image 1 Layout) */}
      <div className="space-y-8">
        {projects.map((project) => {
          const title = project.title;
          const category = project.category || 'PLATFORM / WEB APPLICATION';
          const desc = project.description?.[lang] || project.description?.en || '';
          const targetUrl = project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : (project.githubUrl && project.githubUrl !== '#' ? project.githubUrl : null);

          return (
            <div
              key={project.id}
              className="bento-card p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left Column: Project Text, Category, Description & Badges */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                    {category}
                  </span>
                  <h3 className="font-agrandir font-black text-3xl sm:text-4xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                    {title}
                  </h3>
                  <p className="font-questrial text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>

                {/* Bottom Row: Badges on left, LIVE DEMO Button on right */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 group-hover:border-blue-500/30 group-hover:text-blue-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LIVE DEMO Pill Button (Opens direct link if available, or opens modal) */}
                  {targetUrl ? (
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-md group/btn uppercase tracking-wider shrink-0 cursor-pointer"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-md group/btn uppercase tracking-wider shrink-0 cursor-pointer"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: High-Res Interactive Project Mockup Showcase Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-slate-900/90 p-3 sm:p-4 border border-slate-900/20 shadow-2xl overflow-hidden group/frame">
                  {/* Top Window Bar Dots */}
                  <div className="flex items-center gap-2 mb-3 px-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Mockup Showcase Preview Image (Scroll to color on mobile/tablet, hover on desktop) */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                    <ScrollColorImage
                      src={project.image}
                      alt={title}
                      hoverClass="group-hover/frame:grayscale-0 group-hover/frame:opacity-100 group-hover/frame:scale-105"
                      baseClass="grayscale contrast-110 opacity-85"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover/frame:opacity-10 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* More Projects & Initiatives Banner (Matching Reference Image) */}
      <div className="mt-8 rounded-2xl border border-dashed border-slate-900/20 bg-slate-900/5 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors hover:border-slate-900/40">
        <div className="flex items-center gap-3 text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            MORE PROJECTS & INITIATIVES IN PROGRESS...
          </span>
        </div>

        <span className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 text-white shadow-sm tracking-wider uppercase">
          2026 UPDATES
        </span>
      </div>

      {/* Project Modal Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white border border-slate-900/20 rounded-3xl max-w-3xl w-full p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-950 p-2 rounded-xl bg-slate-900/5 font-bold"
            >
              ✕
            </button>

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-900/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover"
              />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 border border-blue-500/30">
                {selectedProject.category}
              </span>
              <h3 className="font-agrandir font-black text-3xl text-slate-900 mt-3 uppercase">
                {selectedProject.title}
              </h3>
              <p className="font-questrial text-slate-700 text-base mt-3 leading-relaxed">
                {selectedProject.description?.[lang] || selectedProject.description?.en}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags?.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-900/10 flex justify-end gap-3 items-center">
              {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold hover:bg-blue-600 transition-all uppercase tracking-wider shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-slate-900/10 text-slate-900 text-xs font-mono font-bold hover:bg-slate-900 hover:text-white transition-all uppercase tracking-wider"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
