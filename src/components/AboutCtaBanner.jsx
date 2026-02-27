import React from 'react';
import './AboutCtaBanner.css';

export default function AboutCtaBanner({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutCtaBanner" className="acb-section">
      {/* Layered backgrounds: image + scrim + gradient */}
      <div className="acb-bg-image" aria-hidden="true" />
      <div className="acb-bg-scrim" aria-hidden="true" />
      <div className="acb-bg-gradient" aria-hidden="true" />

      {/* Decorative oversized stroke word — purely visual, behind content */}
      <div className="acb-deco-stroke-word" aria-hidden="true">FINANCE</div>

      {/* Decorative Swiss grid column lines */}
      <div className="acb-deco-grid" aria-hidden="true">
        <div className="acb-deco-col acb-deco-col--1" />
        <div className="acb-deco-col acb-deco-col--2" />
        <div className="acb-deco-col acb-deco-col--3" />
      </div>

      {/* Swiss grid modular container */}
      <div className="acb-swiss-grid">

        {/* LEFT COLUMN — vertical bar of the "L" */}
        <div className="acb-left-col">
          <div className="acb-vertical-rule" aria-hidden="true" />
          <span className="acb-vertical-label" aria-hidden="true">DriveWay Finance</span>
          <div className="acb-module-tag">
            <span>CTA</span>
            <span>01</span>
          </div>
        </div>

        {/* RIGHT CONTENT — top + bottom form the "L" */}
        <div className="acb-content-col">

          {/* TOP MODULE — headline spans upper-right */}
          <div className="acb-headline-module">
            <div className="acb-eyebrow-row">
              <span className="acb-eyebrow-line" aria-hidden="true" />
              <span className="acb-eyebrow-text">Your Next Step</span>
            </div>
            {data.headline && (
              <h2 className="acb-headline">
                <span className="acb-headline-main">Ready to Find the Car Loan</span>
                <span className="acb-headline-break" />
                <span className="acb-headline-main">That&#39;s Right for </span>
                <span className="acb-headline-accent">You?</span>
              </h2>
            )}
          </div>

          {/* BOTTOM ROW — horizontal bar of the "L" */}
          <div className="acb-bottom-row">
            <div className="acb-grid-rule" aria-hidden="true" />
            <div className="acb-desc-cta-row">
              {data.description && (
                <div className="acb-desc-module">
                  <p className="acb-description">{data.description}</p>
                </div>
              )}
              {data.ctaButtonText && data.ctaButtonUrl && (
                <div className="acb-cta-module">
                  <a href={data.ctaButtonUrl} className="acb-cta-btn">
                    <span className="acb-btn-text">{data.ctaButtonText}</span>
                    <span className="acb-btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="acb-cta-subline">No pressure. No obligation.</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative orb glow */}
      <div className="acb-orb" aria-hidden="true" />
    </section>
  );
}
