import React from 'react';
import './HomeCtaBanner.css';

export default function HomeCtaBanner({ data }) {
  if (!data) return null;

  return (
    <section data-component="homeCtaBanner" className="cta-banner-section">
      {/* Dot pattern overlay */}
      <div className="cta-dot-layer" aria-hidden="true" />

      {/* Ambient background glow */}
      <div className="cta-ambient-left" aria-hidden="true" />
      <div className="cta-ambient-right" aria-hidden="true" />

      <div className="container mx-auto px-6 py-20">
        {/* Animated gradient border frame */}
        <div className="cta-border-frame">
          <div className="cta-border-inner">

            {/* L-shaped layout: left tall column + right stacked column */}
            <div className="cta-l-grid">

              {/* LEFT COLUMN (vertical bar of L): headline */}
              <div className="cta-text-column">
                <span className="cta-eyebrow font-body">Premium Auto Finance</span>
                <h2 className="cta-headline font-heading">{data.headline}</h2>
              </div>

              {/* RIGHT COLUMN: decorative top + CTA bottom */}
              <div className="cta-right-column">
                {/* Decorative pulsing rings */}
                <div className="cta-deco-rings" aria-hidden="true">
                  <div className="cta-ring cta-ring--outer" />
                  <div className="cta-ring cta-ring--mid" />
                  <div className="cta-ring cta-ring--inner" />
                  <div className="cta-pulse-dot" />
                </div>

                {/* Description + CTA (bottom of right column) */}
                <div className="cta-action-block">
                  <p className="cta-description font-body">{data.description}</p>
                  <div className="cta-btn-wrap">
                    <a
                      href={data.ctaButtonUrl || '/contact'}
                      className="cta-btn font-body"
                    >
                      <span className="cta-btn-text">{data.ctaButtonText}</span>
                      <svg
                        className="cta-btn-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <div className="cta-btn-glow-halo" aria-hidden="true" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
