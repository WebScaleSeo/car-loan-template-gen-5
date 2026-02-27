import React from 'react';
import './FaqCtaBanner.css';

export default function FaqCtaBanner({ data }) {
  if (!data) return null;

  return (
    <section data-component="faqCtaBanner" className="faq-cta-banner">
      {/* Background layers */}
      <div className="faq-cta-bg-image" aria-hidden="true" />
      <div className="faq-cta-scrim" aria-hidden="true" />
      <div className="faq-cta-aurora" aria-hidden="true" />

      {/* Decorative geometry */}
      <div className="faq-cta-ring ring-lg" aria-hidden="true" />
      <div className="faq-cta-ring ring-sm" aria-hidden="true" />
      <div className="faq-cta-diamond" aria-hidden="true" />
      <div className="faq-cta-dot-grid" aria-hidden="true" />

      {/* Inner asymmetric split */}
      <div className="faq-cta-inner">

        {/* LEFT: content */}
        <div className="faq-cta-content">
          <div className="faq-cta-eyebrow">
            <span className="eyebrow-pulse" />
            <span>DriveWay Finance — Support</span>
          </div>

          <h2 className="faq-cta-headline font-heading">
            {data.headline}
          </h2>

          <p className="faq-cta-description font-body">
            {data.description}
          </p>

          <a
            href={data.ctaButtonUrl || '/contact'}
            className="faq-cta-btn"
          >
            <span className="faq-cta-btn-text">{data.ctaButtonText}</span>
            <span className="faq-cta-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <span className="faq-cta-btn-glow" aria-hidden="true" />
          </a>
        </div>

        {/* RIGHT: decorative visual panel */}
        <div className="faq-cta-visual" aria-hidden="true">
          <div className="faq-cta-feature-card">
            <div className="faq-cta-card-top-bar" />
            <div className="faq-cta-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="faq-cta-card-body">
              <span className="faq-cta-card-label">Average Response</span>
              <span className="faq-cta-card-value">Under 24 Hours</span>
            </div>
          </div>

          <div className="faq-cta-pills">
            <div className="faq-cta-pill pill-1">
              <span className="pill-check">✓</span>
              <span>Expert Loan Specialists</span>
            </div>
            <div className="faq-cta-pill pill-2">
              <span className="pill-check">✓</span>
              <span>Plain-Language Guidance</span>
            </div>
            <div className="faq-cta-pill pill-3">
              <span className="pill-check">✓</span>
              <span>No-Pressure Conversations</span>
            </div>
          </div>

          <div className="faq-cta-accent-hex" />
        </div>
      </div>

      {/* Angled bottom divider */}
      <div className="faq-cta-divider" aria-hidden="true" />
    </section>
  );
}
