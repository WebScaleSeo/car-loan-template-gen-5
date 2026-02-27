import React, { useState } from 'react';
import './RatesFaq.css';

export default function RatesFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section data-component="ratesFaq" className="ratesFaq-section">
      {/* Floating decorative orbs */}
      <div className="rf-orb rf-orb--1" aria-hidden="true" />
      <div className="rf-orb rf-orb--2" aria-hidden="true" />
      <div className="rf-orb rf-orb--3" aria-hidden="true" />

      {/* Brutalist background grid lines */}
      <div className="rf-grid-lines" aria-hidden="true">
        <div className="rf-grid-line rf-grid-line--v1" />
        <div className="rf-grid-line rf-grid-line--v2" />
        <div className="rf-grid-line rf-grid-line--h1" />
      </div>

      <div className="rf-inner">
        {/* LEFT PANEL — Asymmetric title/decorative */}
        <div className="rf-left-panel">
          <div className="rf-label-chip">FAQ</div>

          {data.sectionTitle && (
            <h2 className="rf-heading font-heading">
              {data.sectionTitle}
            </h2>
          )}

          <div className="rf-stroke-text font-heading" aria-hidden="true">
            FAQ
          </div>

          <p className="rf-left-copy font-body">
            Everything you need to know about rates, loan terms, and what affects your monthly payment.
          </p>

          <div className="rf-count-badge">
            <span className="rf-count-num">{data.faqs ? data.faqs.length : 0}</span>
            <span className="rf-count-label font-body">Questions<br />Answered</span>
          </div>

          {/* Decorative thick border accent bar */}
          <div className="rf-accent-bar" />
        </div>

        {/* RIGHT PANEL — Accordion */}
        <div className="rf-right-panel">
          {data.faqs && Array.isArray(data.faqs) && data.faqs.map((faq, i) => (
            <div
              key={i}
              className={`rf-faq-item ${openIndex === i ? 'rf-faq-item--open' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <button
                className="rf-faq-question font-heading"
                onClick={() => handleToggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="rf-faq-num font-body">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="rf-faq-qtext">{faq.question}</span>
                <span className="rf-faq-icon" aria-hidden="true">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <div
                className="rf-faq-answer-wrapper"
                style={{ display: openIndex === i ? 'block' : 'none' }}
              >
                <p className="rf-faq-answer font-body">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
