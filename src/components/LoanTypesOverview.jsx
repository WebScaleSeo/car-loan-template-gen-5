import React from 'react';
import './LoanTypesOverview.css';

const ICONS = {
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2v-3l2.5-5.5h13L19 12v3a2 2 0 0 1-2 2h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
      <line x1="5" y1="9" x2="19" y2="9" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5l3 3" />
      <path d="M18 5l2-2" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  ),
};

function LoanCard({ loan, index }) {
  return (
    <div className={`lto-card lto-card-${index}`}>
      <div className="lto-card-inner">
        <div className="lto-card-shimmer" aria-hidden="true" />
        <div className="lto-card-top">
          <div className="lto-icon-ring">
            <div className="lto-icon-wrap">
              {ICONS[loan.iconName] || ICONS.car}
            </div>
          </div>
          <span className="lto-card-num font-body">0{index + 1}</span>
        </div>
        <h3 className="lto-card-title font-heading">
          {loan.title}
        </h3>
        <p className="lto-card-desc font-body">{loan.description}</p>
        {loan.ctaText && (
          <a href={loan.ctaUrl || '/contact'} className="lto-cta font-body">
            <span className="lto-cta-text">{loan.ctaText}</span>
            <span className="lto-cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        )}
        <div className="lto-card-border-bar" />
      </div>
    </div>
  );
}

export default function LoanTypesOverview({ data }) {
  if (!data) return null;

  return (
    <section data-component="loanTypesOverview" className="lto-section">
      {/* Decorative layer */}
      <div className="lto-bg-grid" aria-hidden="true" />
      <div className="lto-orb lto-orb-a" aria-hidden="true" />
      <div className="lto-orb lto-orb-b" aria-hidden="true" />
      <div className="lto-vline lto-vline-1" aria-hidden="true" />
      <div className="lto-vline lto-vline-2" aria-hidden="true" />
      <div className="lto-hline" aria-hidden="true" />
      <div className="lto-crosshair lto-ch-tl" aria-hidden="true" />
      <div className="lto-crosshair lto-ch-br" aria-hidden="true" />

      <div className="lto-container">
        {/* Section header */}
        <div className="lto-header">
          <div className="lto-eyebrow">
            <span className="lto-eyebrow-bar" />
            <span className="lto-eyebrow-text font-body">Financing Solutions</span>
            <span className="lto-eyebrow-bar" />
          </div>
          {data.sectionTitle && (
            <h2 className="lto-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="lto-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Broken-grid cards */}
        {data.loanTypes && Array.isArray(data.loanTypes) && (
          <div className="lto-cards">
            {data.loanTypes.map((loan, i) => (
              <LoanCard key={i} loan={loan} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
