import React from 'react';
import './Footer.css';

export default function Footer({ footer }) {
  const { branding, links, copyright } = footer;

  return (
    <footer data-component="footer" className="footer">
      {/* Split-screen bleed panel — darker left zone */}
      <div className="footer-bleed-panel" aria-hidden="true" />

      {/* Depth layers — parallax-style pulsing orbs (contained) */}
      <div className="footer-orb footer-orb--1" aria-hidden="true" />
      <div className="footer-orb footer-orb--2" aria-hidden="true" />
      <div className="footer-orb footer-orb--3" aria-hidden="true" />

      {/* Gradient mesh aurora overlay */}
      <div className="footer-mesh" aria-hidden="true" />

      <div className="footer-container">
        {/* LEFT — Branding (bleed side) */}
        <div className="footer-brand">
          <span className="footer-eyebrow font-body">Trusted Auto Financing</span>
          <h2 className="footer-brand-name font-heading">{branding.name}</h2>
          <div className="footer-accent-bar" aria-hidden="true" />
          <p className="footer-brand-desc font-body">{branding.description}</p>
        </div>

        {/* RIGHT — Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav-heading font-heading">Quick Links</div>
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.label} className="footer-link-item">
                <a href={link.url} className="footer-link font-body">
                  <span className="footer-link-pip" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/contact" className="footer-cta font-body">
            Get Your Quote
            <span className="footer-cta-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copyright font-body">{copyright}</span>
          <div className="footer-bottom-accent" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
