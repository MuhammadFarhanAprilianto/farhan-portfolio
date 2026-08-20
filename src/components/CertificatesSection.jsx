'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle, ExternalLink, Eye } from 'lucide-react';
import ScrollColorImage from '@/components/ScrollColorImage';

export default function CertificatesSection({ data, lang }) {
  const isEn = lang === 'en';
  const [activeModalCert, setActiveModalCert] = useState(null);

  const certificatesList = [
    {
      id: 'cert-1',
      issuer: 'Course-Net x Prakerja',
      level: 'Predikat Sangat Baik',
      date: '24 Sep 2023',
      title: 'Teknik Pembuatan Aplikasi OOP Bahasa Java bagi Pengembang & Analis Software',
      category: 'Java OOP & Software Engineering',
      image: '/certificates/cert-coursenet.png',
      credentialId: '2309/PK-01158',
    },
    {
      id: 'cert-2',
      issuer: 'MySkill',
      level: 'Bootcamp Batch 8',
      date: '14 Jul 2023',
      title: 'UI-UX Research and Design: Fullstack Intensive Bootcamp',
      category: 'UI/UX Research & Design',
      image: '/certificates/cert-myskill.png',
      credentialId: 'MS-14/7/2023-ChpV1sMtKnDwqjFogVJH',
    },
    {
      id: 'cert-3',
      issuer: 'Karier.mu x IPB University',
      level: 'Nilai Aktivitas: 85',
      date: '21 Aug 2023',
      title: 'Mendesain UI/UX Aplikasi di Figma bagi Desainer UI/UX',
      category: 'Figma UI/UX & Design Systems',
      image: '/certificates/cert-kariermu.png',
      credentialId: '#9147566',
    },
    {
      id: 'cert-4',
      issuer: 'Universitas Pancasila',
      level: 'Sertifikat Apresiasi',
      date: '26 Apr 2024',
      title: 'Webinar "Developing Web using Java"',
      category: 'Web Development & Java',
      image: '/certificates/cert-pancasila.png',
      credentialId: 'FTUP-IMATIKA-2024',
    },
  ];

  return (
    <section id="certificates" className="py-12 border-t border-slate-900/10 my-10 scroll-mt-24">
      {/* Section Header (Matching Reference Image) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div className="space-y-1 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            CREDENTIALS
          </span>
          <h2 className="font-agrandir font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Licenses & Certificates.
          </h2>
        </div>

        <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
          VERIFIED BADGES
        </span>
      </div>

      {/* 2-Column Grid of Certificate Cards with Real Image Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificatesList.map((cert) => (
          <div
            key={cert.id}
            className="bento-card p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-slate-900/10 hover:border-blue-500/30 overflow-hidden"
          >
            <div>
              {/* Top Row: Issuer & Level + Date */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                  {cert.issuer} <span className="text-slate-400 font-normal">• {cert.level}</span>
                </span>
                <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="font-agrandir font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-4">
                {cert.title}
              </h3>

              {/* Certificate Image Frame Preview */}
              <div
                onClick={() => setActiveModalCert(cert)}
                className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-900/10 cursor-pointer group/img shadow-sm"
              >
                <ScrollColorImage
                  src={cert.image}
                  alt={cert.title}
                  hoverClass="group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105"
                  baseClass="grayscale contrast-105 opacity-90"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>VIEW CERTIFICATE</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Category on left + VERIFY Button on right */}
            <div className="pt-5 mt-4 border-t border-slate-900/10 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-slate-600 tracking-wider truncate max-w-[60%]">
                {cert.category}
              </span>

              <button
                onClick={() => setActiveModalCert(cert)}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900 group-hover:text-blue-600 uppercase tracking-wider transition-colors shrink-0"
              >
                <span>VERIFY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Certificate Image High-Res Viewer Modal */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-white border border-slate-900/20 rounded-3xl max-w-4xl w-full p-6 md:p-8 space-y-6 relative max-h-[92vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActiveModalCert(null)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-950 p-2.5 rounded-xl bg-slate-900/5 font-bold"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 uppercase tracking-wider border border-emerald-500/20">
                  OFFICIAL VERIFIED CREDENTIAL
                </span>
                <h4 className="font-agrandir font-black text-xl text-slate-900 mt-1">
                  {activeModalCert.issuer}
                </h4>
              </div>
            </div>

            {/* Certificate Title & Metadata */}
            <div>
              <h3 className="font-agrandir font-black text-2xl text-slate-900 leading-tight">
                {activeModalCert.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-600">
                <span>Issued: <strong className="text-slate-900">{activeModalCert.date}</strong></span>
                <span>•</span>
                <span>Level: <strong className="text-slate-900">{activeModalCert.level}</strong></span>
                <span>•</span>
                <span>ID: <strong className="text-slate-900">{activeModalCert.credentialId}</strong></span>
              </div>
            </div>

            {/* High-Res Full Certificate Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-900/20 shadow-xl bg-slate-900">
              <img
                src={activeModalCert.image}
                alt={activeModalCert.title}
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-900/10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-500">
                Category: {activeModalCert.category}
              </span>
              <button
                onClick={() => setActiveModalCert(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold hover:bg-blue-600 transition-all uppercase tracking-wider"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
