'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ data }) {
  const [activeTab, setActiveTab] = useState('ABOUT');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const navLinks = [
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  // Click outside to automatically close mobile menu drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Automatic ScrollSpy: Updates activeTab indicator line automatically as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionIds = ['about', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            const matchingLink = navLinks.find((link) => link.id === sectionId);
            if (matchingLink) {
              setActiveTab(matchingLink.label);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      {/* Highly Visible 3D Crystal Liquid Glass Floating Capsule */}
      <div
        className={cn(
          'crystal-glass-container flex items-center justify-between h-14 px-4 sm:px-8 transition-all duration-300',
          scrolled && 'scale-[0.99] shadow-slate-400/50'
        )}
      >
        {/* Brand / Logo (Questrial Font) */}
        <a
          href="#about"
          className="flex items-center gap-0 group cursor-pointer select-none relative z-10 font-questrial text-lg sm:text-xl tracking-tight"
        >
          <span className="font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
            farhan
          </span>
          <span className="font-normal text-slate-500/80 group-hover:text-slate-600 transition-colors">
            aprilianto
          </span>
        </a>

        {/* Center: Desktop Navigation Links with Animated Active Underline */}
        <nav className="hidden md:flex items-center gap-2 relative z-10">
          {navLinks.map((link) => {
            const isHovered = hoveredTab === link.label;
            const isActive = activeTab === link.label;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                onMouseEnter={() => setHoveredTab(link.label)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  'font-questrial relative px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 select-none',
                  isHovered || isActive
                    ? 'text-slate-900 drop-shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                )}
              >
                {/* Animated Glass Hover Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="navbar-hover-glass-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-slate-900/10 border border-slate-900/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] -z-10"
                  />
                )}

                {/* Active Indicator Underline (Smoothly slides automatically on scroll) */}
                {isActive && !isHovered && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-slate-900 shadow-[0_0_8px_rgba(15,23,42,0.4)]"
                  />
                )}

                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Available Action Button (Questrial Font) */}
        <div className="flex items-center gap-3 relative z-10">
          <a
            href="#contact"
            className="font-questrial hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-slate-900/20 bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 cursor-pointer select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            </span>
            <span>AVAILABLE</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-slate-900/20 bg-slate-900/5 text-slate-900 transition-all duration-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Liquid Glass Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mt-2 p-3.5 crystal-glass-card space-y-2 font-questrial"
          >
            <div className="flex flex-col space-y-1 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-150 flex items-center justify-between',
                    activeTab === link.label
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                  )}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2.5 border-t border-slate-900/10 flex items-center justify-between gap-3 relative z-10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-slate-900/20 bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>AVAILABLE FOR HIRE</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
