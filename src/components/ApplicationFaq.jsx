import React, { useState } from 'react';
import './ApplicationFaq.css';

export default function ApplicationFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  return (
    <section data-component="applicationFaq" className="applicationFaq-section">
      {/* Mesh gradient background blobs */}
      <div className="faq-bg-blob faq-blob-1" aria-hidden="true"></div>
      <div className="faq-bg-blob faq-blob-2" aria-hidden="true"></div>
      <div className="faq-bg-blob faq-blob-3" aria-hidden="true"></div>

      {/* Radiating rings — centered, decorative */}
      <div className="faq-rings" aria-hidden="true">
        <div className="faq-ring faq-ring-1"></div>
        <div className="faq-ring faq-ring-2"></div>
        <div className="faq-ring faq-ring-3"></div>
        <div className="faq-ring faq-ring-4"></div>
      </div>

      <div className="faq-container">

        {/* Section header */}
        {data.sectionTitle && (
          <div className="faq-header">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-dot"></span>
              <span className="faq-eyebrow-text font-body">Common Questions</span>
              <span className="faq-eyebrow-dot"></span>
            </div>
            <h2 className="faq-title font-heading">{data.sectionTitle}</h2>
            <div className="faq-title-accent">
              <span className="faq-accent-line"></span>
              <span className="faq-accent-diamond"></span>
              <span className="faq-accent-line"></span>
            </div>
          </div>
        )}

        {/* FAQ Accordion */}
        {data.faqs && Array.isArray(data.faqs) && (
          <div className="faq-list">
            {data.faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                {/* Animated gradient border layer */}
                <div className="faq-item-border" aria-hidden="true"></div>

                {/* Question button */}
                <button
                  className="faq-question font-body"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="faq-question-number font-heading">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <span className="faq-toggle-h"></span>
                    <span className="faq-toggle-v"></span>
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  className="faq-answer"
                  style={{ display: openIndex === i ? 'block' : 'none' }}
                >
                  <p className="faq-answer-text font-body">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cinematic bottom accent */}
        <div className="faq-footer-accent" aria-hidden="true">
          <div className="faq-footer-line"></div>
          <div className="faq-footer-glow"></div>
        </div>

      </div>
    </section>
  );
}
