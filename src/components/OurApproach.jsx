import React from 'react';
import './OurApproach.css';

const ICONS = {
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  'user-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
      <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.832 2.849"/>
    </svg>
  ),
  'clock': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  'trending-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  'headset': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
};

const PANEL_VARIANTS = ['oa-panel-a', 'oa-panel-b', 'oa-panel-c', 'oa-panel-a', 'oa-panel-b'];

export default function OurApproach({ data }) {
  if (!data) return null;

  return (
    <section data-component="ourApproach" className="oa-section">
      {/* Dot-grid pattern layer */}
      <div className="oa-bg-pattern" aria-hidden="true" />
      {/* Decorative blend-mode blobs */}
      <div className="oa-blob oa-blob--1" aria-hidden="true" />
      <div className="oa-blob oa-blob--2" aria-hidden="true" />

      <div className="oa-container">

        {/* ── Section header ── */}
        <div className="oa-header">
          <div className="oa-eyebrow">
            <span className="oa-dot oa-dot--1" aria-hidden="true" />
            <span className="oa-dot oa-dot--2" aria-hidden="true" />
            <span className="oa-dot oa-dot--3" aria-hidden="true" />
            <span className="oa-eyebrow-label">Our Approach</span>
          </div>
          <h2 className="oa-title font-heading">{data.sectionTitle}</h2>
          <p className="oa-desc font-body">{data.sectionDescription}</p>
        </div>

        {/* ── Zigzag pillar rows ── */}
        <div className="oa-rows">
          {data.approachPillars && data.approachPillars.map((pillar, i) => {
            const isOdd = i % 2 !== 0;
            const panelClass = PANEL_VARIANTS[i] || 'oa-panel-a';

            return (
              <div
                key={i}
                className={`oa-row${isOdd ? ' oa-row--flip' : ''}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Color-blocked icon panel */}
                <div className={`oa-icon-panel ${panelClass}`}>
                  <div className="oa-panel-shimmer" aria-hidden="true" />
                  <span className="oa-step-num font-heading">{String(i + 1).padStart(2, '0')}</span>
                  <div className="oa-icon-wrap">
                    {ICONS[pillar.iconName] || ICONS['shield-check']}
                  </div>
                  <p className="oa-panel-label font-heading">{pillar.title}</p>
                </div>

                {/* Connector arrow */}
                <div className="oa-connector" aria-hidden="true">
                  <div className="oa-connector-line" />
                  <div className="oa-arrow-bounce">
                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                      {isOdd
                        ? <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        : <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      }
                    </svg>
                  </div>
                  <div className="oa-connector-line" />
                </div>

                {/* Content card */}
                <div className="oa-card">
                  <div className="oa-card-num font-heading">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="oa-card-title font-heading">{pillar.title}</h3>
                  <p className="oa-card-body font-body">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
