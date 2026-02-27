import React from 'react';
import './FaqHero.css';

export default function FaqHero({ data }) {
  if (!data) return null;

  const trustBadges = [
    { icon: '◆', label: 'Expert Guidance', desc: 'By certified specialists' },
    { icon: '◈', label: 'Clear & Transparent', desc: 'No hidden fees ever' },
    { icon: '◉', label: 'Instant Answers', desc: 'Updated FAQ library' },
    { icon: '◎', label: '10,000+ Helped', desc: 'Customers nationwide' },
  ];

  return (
    <section data-component="faqHero" className="faqHero-section">
      {/* Layered background */}
      <div className="faqHero-bg-base" aria-hidden="true"></div>
      <div className="faqHero-bg-mesh" aria-hidden="true"></div>
      <div className="faqHero-bg-burst" aria-hidden="true"></div>
      <div className="faqHero-grid-overlay" aria-hidden="true"></div>

      {/* Decorative oversized "FAQ" watermark — top-right */}
      <div className="faqHero-deco-word font-heading" aria-hidden="true">FAQ</div>

      {/* Geometric accent bars */}
      <div className="faqHero-bar-left" aria-hidden="true"></div>
      <div className="faqHero-corner-tl" aria-hidden="true"></div>
      <div className="faqHero-corner-br" aria-hidden="true"></div>

      {/* Main stacked content */}
      <div className="faqHero-inner">
        {/* Label row */}
        <div className="faqHero-label-row">
          <span className="faqHero-label">Frequently Asked Questions</span>
          <div className="faqHero-label-rule"></div>
        </div>

        {/* Headline — full text always rendered; CSS typewriter-reveal overlay */}
        <div className="faqHero-headline-wrap">
          <h1 className="faqHero-headline font-heading">
            {data.headline}
          </h1>
          <span className="faqHero-typewriter-cursor" aria-hidden="true">|</span>
        </div>

        {/* Subheadline */}
        <p className="faqHero-subheadline font-body">{data.subheadline}</p>

        {/* CTA buttons */}
        <div className="faqHero-cta-row">
          <a href="/contact" className="faqHero-btn-primary">
            <span>Browse All Questions</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/contact" className="faqHero-btn-ghost">Contact an Expert</a>
        </div>

        {/* Trust / credibility badges */}
        <div className="faqHero-trust-row">
          {trustBadges.map((badge, i) => (
            <div key={i} className={`faqHero-trust-badge faqHero-trust-badge--${i}`}>
              <span className="faqHero-badge-icon" aria-hidden="true">{badge.icon}</span>
              <div className="faqHero-badge-text">
                <div className="faqHero-badge-label">{badge.label}</div>
                <div className="faqHero-badge-desc">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient rule */}
      <div className="faqHero-bottom-rule" aria-hidden="true"></div>
    </section>
  );
}
