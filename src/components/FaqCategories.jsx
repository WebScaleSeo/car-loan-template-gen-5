import React from 'react';
import './FaqCategories.css';

const IconMap = {
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1l3-5h10l3 5h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/>
      <circle cx="7.5" cy="17" r="2.5"/>
      <circle cx="16.5" cy="17" r="2.5"/>
    </svg>
  ),
  percent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="5" x2="5" y2="19"/>
      <circle cx="6.5" cy="6.5" r="2.5"/>
      <circle cx="17.5" cy="17.5" r="2.5"/>
    </svg>
  ),
  'clipboard-list': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
      <line x1="9" y1="16" x2="15" y2="16"/>
      <line x1="9" y1="8" x2="12" y2="8"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  'refresh-cw': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  'dollar-sign': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  'help-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
};

function CategoryIcon({ name }) {
  return IconMap[name] || IconMap['help-circle'];
}

export default function FaqCategories({ data }) {
  if (!data) return null;

  const categories = data.categories || [];

  return (
    <section data-component="faqCategories" id="faqCategories" className="faqcat-section">
      {/* Dot grid overlay */}
      <div className="faqcat-dotgrid" aria-hidden="true" />

      {/* Spotlight beam effects */}
      <div className="faqcat-beam faqcat-beam--1" aria-hidden="true" />
      <div className="faqcat-beam faqcat-beam--2" aria-hidden="true" />

      {/* Geometric decorative shapes */}
      <div className="faqcat-geo faqcat-geo--circle" aria-hidden="true" />
      <div className="faqcat-geo faqcat-geo--square" aria-hidden="true" />
      <div className="faqcat-geo faqcat-geo--triangle" aria-hidden="true" />

      <div className="faqcat-inner">
        {/* ── Sidebar Panel ── */}
        <aside className="faqcat-sidebar">
          <div className="faqcat-sidebar__track" aria-hidden="true">
            <span className="faqcat-sidebar__label">F A Q &nbsp; C A T E G O R I E S</span>
          </div>

          <div className="faqcat-sidebar__content">
            <div className="faqcat-sidebar__eyebrow">Quick Navigation</div>

            {data.sectionTitle && (
              <h2 className="faqcat-sidebar__title font-heading">
                <span className="faqcat-typewriter">{data.sectionTitle}</span>
                <span className="faqcat-cursor" aria-hidden="true">|</span>
              </h2>
            )}

            <p className="faqcat-sidebar__desc">
              Select a topic below to jump directly to answers that matter most to you.
            </p>

            <div className="faqcat-sidebar__count">
              <span className="faqcat-count-num">{categories.length}</span>
              <span className="faqcat-count-label">Topic{categories.length !== 1 ? 's' : ''}</span>
            </div>

            {/* Geometric line decoration */}
            <div className="faqcat-sidebar__lines" aria-hidden="true">
              <div className="faqcat-line faqcat-line--1" />
              <div className="faqcat-line faqcat-line--2" />
              <div className="faqcat-line faqcat-line--3" />
            </div>
          </div>

          {/* Corner grid accent */}
          <div className="faqcat-sidebar__grid" aria-hidden="true" />
        </aside>

        {/* ── Category Cards Grid ── */}
        <div className="faqcat-grid">
          {categories.map((cat, i) => (
            <article
              key={i}
              className="faqcat-card"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* Card inner glow layer */}
              <div className="faqcat-card__glow" aria-hidden="true" />

              {/* Top accent bar */}
              <div className="faqcat-card__bar" aria-hidden="true" />

              {/* Icon */}
              {cat.iconName && (
                <div className="faqcat-card__icon-wrap">
                  <div className="faqcat-card__icon">
                    <CategoryIcon name={cat.iconName} />
                  </div>
                  <div className="faqcat-card__icon-ring" aria-hidden="true" />
                </div>
              )}

              {/* Text */}
              <div className="faqcat-card__body">
                {cat.title && (
                  <h3 className="faqcat-card__title font-heading">{cat.title}</h3>
                )}
                {cat.description && (
                  <p className="faqcat-card__desc font-body">{cat.description}</p>
                )}
              </div>

              {/* Arrow indicator */}
              <div className="faqcat-card__arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </div>

              {/* Index number */}
              <span className="faqcat-card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
