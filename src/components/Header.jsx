import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ navigation, branding }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navigation?.items || [];
  const linkItems = navItems.filter(item => item.type === 'link');
  const ctaItems = navItems.filter(item => item.type === 'cta');

  const brandCore = branding?.brandNameCore || 'DriveWay';
  const brandQualifier = branding?.brandNameQualifier || 'Finance';
  const brandName = branding?.name || 'DriveWay Finance';

  return (
    <header
      data-component="header"
      className={`header-root${scrolled ? ' header-scrolled' : ''}`}
      role="banner"
    >
      {/* Top gradient accent strip */}
      <div className="header-accent-strip" aria-hidden="true" />

      {/* Subtle decorative dot-grid background pattern */}
      <div className="header-bg-decor" aria-hidden="true" />

      <div className="header-inner">
        {/* Logo — LEFT (classic-elevated archetype) */}
        <a href="/" className="header-logo" aria-label={`${brandName} — Home`}>
          <span className="header-logo-mark" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="9" fill="url(#logoGrad)" />
              <path d="M8 22L12 12L16 18L20 14L24 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="10" r="2.5" fill="white" opacity="0.6" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--hero-gradient-from)" />
                  <stop offset="1" stopColor="var(--accent-highlight)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="header-logo-text">
            <span className="header-logo-core">{brandCore}</span>
            <span className="header-logo-qualifier">{brandQualifier}</span>
          </span>
        </a>

        {/* Navigation — RIGHT (classic-elevated archetype) */}
        <nav className="header-nav" aria-label="Primary navigation">
          {linkItems.map((item) => (
            <a key={item.url + item.label} href={item.url} className="header-nav-link">
              <span className="header-nav-link-label">{item.label}</span>
              <span className="header-nav-link-bar" aria-hidden="true" />
            </a>
          ))}

          {ctaItems.map((item) => (
            <a key={item.url + item.label} href={item.url || '/contact'} className="header-cta-btn">
              <span className="header-cta-shine" aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom accent border that reveals on scroll */}
      <div className="header-bottom-accent" aria-hidden="true" />
    </header>
  );
}
