import React from 'react';
import './KeyBenefits.css';

const ICONS = {
  percent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'user-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
};

export default function KeyBenefits({ data }) {
  if (!data) return null;

  return (
    <section data-component="keyBenefits" className="keyBenefits-section">
      {/* Layered background system */}
      <div className="kb-bg" aria-hidden="true">
        <div className="kb-bg-aurora" />
        <div className="kb-bg-orb kb-orb-1" />
        <div className="kb-bg-orb kb-orb-2" />
        <div className="kb-bg-orb kb-orb-3" />
        <div className="kb-bg-grid" />
      </div>

      {/* Oversized decorative display type */}
      <div className="kb-display-word" aria-hidden="true">DRIVE</div>

      <div className="container mx-auto px-6 kb-content">
        {/* Header block */}
        <div className="kb-header">
          <div className="kb-eyebrow font-body">Why DriveWay Finance</div>
          {data.sectionTitle && (
            <h2 className="kb-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="kb-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Benefits grid */}
        {data.benefits && Array.isArray(data.benefits) && (
          <div className="kb-grid">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className="kb-card"
                style={{ animationDelay: `${0.1 + i * 0.11}s` }}
              >
                {/* Animated gradient border layer */}
                <div className="kb-card-border" aria-hidden="true" />

                <div className="kb-card-inner">
                  {benefit.iconName && (
                    <div className="kb-icon">
                      {ICONS[benefit.iconName] || ICONS['shield']}
                    </div>
                  )}
                  {benefit.title && (
                    <h3 className="kb-card-title font-heading">{benefit.title}</h3>
                  )}
                  {benefit.description && (
                    <p className="kb-card-desc font-body">{benefit.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
