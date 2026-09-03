'use client';

export default function BentoGridRow2({ data, lang }) {
  const isEn = lang === 'en';

  const capabilities = [
    {
      id: 'webdev',
      title: isEn ? 'Web & FinTech Development' : 'Pengembangan Web & FinTech',
      description: isEn
        ? 'Building high-performance, real-time web applications & trading platforms using Next.js (React), TypeScript, WebSocket live streaming, RESTful APIs, and Tailwind CSS with secure architecture.'
        : 'Membangun aplikasi web dan platform trading real-time berkinerja tinggi menggunakan Next.js (React), TypeScript, WebSocket live streaming, RESTful API, dan Tailwind CSS dengan arsitektur aman.',
      badges: ['Next.js', 'React', 'TypeScript', 'WebSocket', 'Tailwind CSS', 'RESTful API'],
    },
    {
      id: 'mobiledev',
      title: isEn ? 'Mobile Development' : 'Pengembangan Aplikasi Mobile',
      description: isEn
        ? 'Engineering cross-platform mobile applications for Android using Flutter & Dart, Provider state management architecture, Cloud Firestore, and Supabase backends.'
        : 'Pengembangan aplikasi seluler lintas platform untuk Android menggunakan Flutter & Dart, arsitektur Provider state management, Cloud Firestore, dan Supabase.',
      badges: ['Flutter', 'Dart', 'Supabase', 'Cloud Firestore', 'Provider'],
    },
    {
      id: 'uiuxdesign',
      title: isEn ? 'UI/UX & Visual Design' : 'UI/UX & Desain Visual',
      description: isEn
        ? 'Designing intuitive digital experiences, high-fidelity trading & SaaS dashboards, user flows, interactive wireframes, and design systems in Figma through user-centered research.'
        : 'Merancang pengalaman digital yang intuitif, dashboard trading & SaaS high-fidelity, alur pengguna, wireframe interaktif, dan sistem desain di Figma berbasis riset pengguna.',
      badges: ['Figma', 'FinTech UI', 'Wireframing', 'Design Systems', 'User Research'],
    },
    {
      id: 'backend-sys',
      title: isEn ? 'Backend & System Analysis' : 'Backend & Analisis Sistem',
      description: isEn
        ? 'Architecting high-throughput backend services and full-stack systems with Golang (Go), Docker containerization, MySQL/MongoDB databases, JWT authentication, Midtrans Payment Gateway, real-time matching engine logic, and cloud deployment.'
        : 'Merancang layanan backend berkecepatan tinggi dan sistem full-stack dengan Golang (Go), kontainerisasi Docker, basis data MySQL/MongoDB, autentikasi JWT, Midtrans Payment Gateway, logika matching engine real-time, dan deployment cloud.',
      badges: ['Golang', 'Docker', 'WebSocket Engine', 'MySQL', 'MongoDB Atlas', 'JWT Auth', 'Midtrans', 'Vercel'],
    },
  ];

  return (
    <section className="my-10 space-y-6">
      {/* Section Header */}
      <div className="space-y-1 text-left">
        <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          CAPABILITIES & COMPETENCIES
        </span>
        <h2 className="font-agrandir font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
          {isEn ? 'Technical Expertise & Services' : 'Keahlian Teknis & Layanan'}
        </h2>
      </div>

      {/* 2x2 Capabilities Grid (Summarized directly from CV) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((item) => (
          <div
            key={item.id}
            className="bento-card p-6 md:p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="font-questrial text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Badges List at Bottom */}
            <div className="mt-6 pt-5 border-t border-slate-900/10 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/5 border border-slate-900/10 text-slate-700 group-hover:border-blue-500/30 group-hover:text-blue-600 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
