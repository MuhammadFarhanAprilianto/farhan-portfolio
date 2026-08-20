export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f11] flex flex-col items-center justify-center text-center px-4">
      <div className="font-heading font-black text-7xl text-blue-500/30 mb-4">404</div>
      <h1 className="font-heading font-extrabold text-3xl text-white mb-3">Page Not Found</h1>
      <p className="text-gray-400 text-sm mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30"
      >
        Back to Portfolio
      </a>
    </div>
  );
}
