import React from 'react';
import './AboutHero.css';

const BENEFITS = [
  'No hidden fees or surprise charges',
  'Pre-approval in under 5 minutes',
  'Flexible terms built around your budget',
  'Dedicated support from real advisors',
];

export default function AboutHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutHero" className="aboutHero-section">
      {/* Dot-grid pattern layer */}
      <div className="ah-dot-pattern" aria-hidden="true" />

      {/* Ambient glow orbs (decorative only) */}
      <div className="ah-orb ah-orb--a" aria-hidden="true" />
      <div className="ah-orb ah-orb--b" aria-hidden="true" />

      <div className="ah-inner">
        {/* ── LEFT BLOCK (55%) ── */}
        <div className="ah-left">
          <span className="ah-eyebrow ah-spring ah-spring--1">
            <span className="ah-eyebrow-dot" aria-hidden="true" />
            About DriveWay Finance
          </span>

          {/* Headline with decorative stroke ghost word behind it */}
          <div className="ah-headline-wrap">
            <span className="ah-ghost-word" aria-hidden="true">Finance</span>
            <h1 className="ah-headline font-heading ah-spring ah-spring--2">
              {data.headline}
            </h1>
          </div>

          <p className="ah-sub font-body ah-spring ah-spring--3">
            {data.subheadline}
          </p>

          <div className="ah-cta-row ah-spring ah-spring--4">
            <a href="/contact" className="ah-btn">
              Get Pre-Approved
              <svg
                className="ah-btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="ah-trust-note font-body">No credit score required to start</span>
          </div>
        </div>

        {/* ── RIGHT BLOCK (45%) — overlaps left boundary ── */}
        <div className="ah-right ah-spring ah-spring--5">
          <div className="ah-panel">
            {/* Panel top accent line */}
            <div className="ah-panel-accent-bar" aria-hidden="true" />

            <p className="ah-panel-label font-body">Why DriveWay?</p>

            <ul className="ah-checklist">
              {BENEFITS.map((benefit, i) => (
                <li
                  key={i}
                  className="ah-check-item font-body"
                  style={{ '--item-i': i }}
                >
                  <span className="ah-check-badge" aria-hidden="true">✓</span>
                  <span className="ah-check-text">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Decorative ring */}
            <div className="ah-panel-ring" aria-hidden="true" />
            <div className="ah-panel-ring ah-panel-ring--2" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
