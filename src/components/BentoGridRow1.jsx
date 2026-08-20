'use client';

import { useState } from 'react';
import { Share2, Mail, CheckCircle2, GraduationCap, MapPin, Clock, UserCheck, Cpu, Briefcase, BookOpen, Instagram, MessageCircle } from 'lucide-react';

export default function BentoGridRow1({ data, lang }) {
  const [copied, setCopied] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const profile = data?.profile || {};
  const stats = data?.stats || {};
  const isEn = lang === 'en';

  const name = profile.name || 'Muhammad Farhan Aprilianto';
  const role = profile.role?.[lang] || profile.role?.en || 'Full-Stack Web / Mobile Developer & UI/UX Designer';
  const email = profile.email || 'farhankey666@gmail.com';
  const whatsapp = profile.whatsapp || 'https://wa.me/6285732021121';
  const avatarUrl = profile.cardAvatar || '/farhan-suit.jpg';
  const location = profile.location || 'Jakarta, Indonesia';

  const yearsVal = stats.yearsExperience?.value || '03+';
  const yearsLabel = stats.yearsExperience?.label?.[lang] || (isEn ? 'Years Experience' : 'Tahun Pengalaman');

  const projectsVal = stats.projectsShipped?.value || '45+';
  const projectsLabel = stats.projectsShipped?.label?.[lang] || (isEn ? 'Projects Shipped' : 'Proyek Selesai');

  // List of 32 Frequently Used Tools & Software
  const tools = [
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'JS', icon: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Node.JS', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'Express.JS', icon: 'https://cdn.simpleicons.org/express' },
    { name: 'Next.JS', icon: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Wordpress', icon: 'https://cdn.simpleicons.org/wordpress' },
    { name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
    { name: 'Chatgpt', icon: 'https://api.iconify.design/logos:openai-icon.svg' },
    { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/D97706' },
    { name: 'Trae', icon: 'https://api.iconify.design/ri:sparkling-fill.svg?color=%233b82f6' },
    { name: 'Antigravity', icon: 'https://api.iconify.design/mdi:atom.svg?color=%232563eb' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
    { name: 'CorelDraw', icon: 'https://api.iconify.design/simple-icons:coreldraw.svg' },
    { name: 'AdobeIllustrator', icon: 'https://api.iconify.design/logos:adobe-illustrator.svg' },
    { name: 'Photoshop', icon: 'https://api.iconify.design/logos:adobe-photoshop.svg' },
    { name: 'Capcut', icon: 'https://api.iconify.design/lucide:scissors.svg?color=%23000000' },
    { name: 'Adobe Premiere', icon: 'https://api.iconify.design/logos:adobe-premiere.svg' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${name} - ${role}`,
        text: `${name} Developer Portfolio`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 scroll-mt-24">
      
      {/* Toast notifications */}
      {(copied || shareToast) && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{copied ? (isEn ? 'Email copied!' : 'Email tersalin!') : (isEn ? 'Portfolio link copied!' : 'Link portofolio tersalin!')}</span>
        </div>
      )}

      {/* Left Column: Profile Card (5 cols on lg) */}
      <div className="lg:col-span-5 bento-card p-6 md:p-8 flex flex-col justify-between group">
        <div>
          {/* Header: Avatar, Name & Role Pill */}
          <div className="flex items-start gap-5 mb-5">
            <div className="relative shrink-0">
              <img
                src={avatarUrl}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-500/40 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" title="Available" />
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight leading-snug">
                {name}
              </h2>
              <div>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 border border-blue-500/30 text-blue-600 tracking-wider uppercase">
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-slate-900/10 my-5" />

          {/* Metadata Quick-Info 8-Pills Grid (Matching Reference Image 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-mono">
            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="truncate">Universitas Pancasila</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>he/him</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="truncate">{location}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>WIB // UTC+7</span>
            </div>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors group/item"
            >
              <Mail className="w-4 h-4 text-blue-600 shrink-0 group-hover/item:scale-110 transition-transform" />
              <span className="truncate">{email}</span>
            </a>

            <a
              href="https://instagram.com/frhanap_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 hover:border-pink-500/30 transition-colors group/item"
            >
              <Instagram className="w-4 h-4 text-pink-600 shrink-0 group-hover/item:scale-110 transition-transform" />
              <span className="truncate">instagram.com/@frhanap_</span>
            </a>

            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="truncate">Fresh Graduate</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/5 px-3 py-2 rounded-xl border border-slate-900/10 hover:bg-slate-900/10 transition-colors">
              <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="truncate">Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Card Footer Action Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-900/10 flex items-center justify-end gap-2">
          {/* Share Button */}
          <button
            onClick={handleShare}
            title={isEn ? 'Share Portfolio' : 'Bagikan Portofolio'}
            className="p-2.5 rounded-xl bg-slate-900/5 border border-slate-900/15 text-slate-700 hover:text-slate-950 hover:bg-slate-900/10 transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* WhatsApp Contact Direct Button */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title={isEn ? 'Chat via WhatsApp' : 'Hubungi via WhatsApp'}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isEn ? 'Contact' : 'Kontak'}</span>
          </a>
        </div>
      </div>

      {/* Right Column: Stats + Tech Stack Tools Grid (7 cols on lg) */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Top: 2 Horizontal Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          
          {/* Stat Card 1 */}
          <div className="bento-card p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">STAT // 01</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
            </div>
            <div className="my-4">
              <div className="font-heading font-black text-5xl text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                {yearsVal}
              </div>
              <div className="mt-2 text-sm text-slate-600 font-medium">
                {yearsLabel}
              </div>
            </div>
            <div className="h-[2px] w-12 bg-blue-500/50 group-hover:w-full transition-all duration-500" />
          </div>

          {/* Stat Card 2 */}
          <div className="bento-card p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">STAT // 02</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:animate-ping" />
            </div>
            <div className="my-4">
              <div className="font-heading font-black text-5xl text-slate-900 group-hover:text-cyan-600 transition-colors tracking-tight">
                {projectsVal}
              </div>
              <div className="mt-2 text-sm text-slate-600 font-medium">
                {projectsLabel}
              </div>
            </div>
            <div className="h-[2px] w-12 bg-cyan-500/50 group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        {/* Bottom: Tech Stack & Tools Card (32 Tools Grid) */}
        <div className="bento-card p-6 md:p-7 flex flex-col justify-between group relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest font-mono">
                {isEn ? 'TECH STACK & TOOLS' : 'PERANGKAT & TEKNOLOGI'}
              </span>
            </div>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-500/10 border border-blue-500/20 px-3 py-0.5 rounded-full font-mono">
              32 {isEn ? 'Tools' : 'Perangkat'}
            </span>
          </div>

          {/* 32 Interactive Tool Badges Grid */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="relative group/tool p-2.5 rounded-xl bg-slate-900/5 hover:bg-blue-50 border border-slate-900/10 hover:border-blue-500 shadow-sm hover:shadow-md hover:shadow-blue-500/15 transition-all duration-200 cursor-pointer flex items-center justify-center"
                title={tool.name}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />

                {/* Floating Tooltip showing tool name */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/tool:opacity-100 transition-all duration-200 pointer-events-none z-30 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold font-mono rounded-md shadow-xl whitespace-nowrap">
                  {tool.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
