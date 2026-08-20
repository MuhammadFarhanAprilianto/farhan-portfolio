'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollColorImage({
  src,
  alt,
  className = '',
  hoverClass = 'group-hover:grayscale-0',
  baseClass = 'grayscale contrast-110',
  ...props
}) {
  const [inView, setInView] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      // Mobile and Tablet: viewport width < 1024px
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // On mobile & tablet, turn from black-and-white to full color when scrolled into viewport
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.2, // Triggers when 20% of image is visible
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentImg = imgRef.current;
    if (currentImg) {
      observer.observe(currentImg);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, []);

  // Dynamic classes:
  // Mobile & Tablet (<1024px): Scroll-based color transition (inView ? full color : black & white)
  // Laptop & Desktop (>=1024px): Mouse hover only (black & white default -> color on mouse hover)
  const activeColorClass = isMobileOrTablet
    ? inView
      ? 'grayscale-0 opacity-100 contrast-100'
      : 'grayscale opacity-90 contrast-115'
    : `${baseClass} ${hoverClass}`;

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={cn('transition-all duration-700 ease-out', activeColorClass, className)}
      {...props}
    />
  );
}
