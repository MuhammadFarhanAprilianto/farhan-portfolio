import './globals.css';

export const metadata = {
  title: 'FarhanPortfolio',
  description: 'Portofolio Resmi Muhammad Farhan Aprilianto - Full-Stack Web & Mobile Developer, UI/UX Designer',
  icons: {
    icon: [
      { url: '/favicon.webp', type: 'image/webp' },
      { url: '/icon.webp', type: 'image/webp' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.webp',
    apple: '/apple-icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/apple-icon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Questrial&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dot-grid min-h-screen text-gray-100 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

