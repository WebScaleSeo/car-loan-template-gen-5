import React, { useState } from 'react';
import './ContactFaqPreview.css';

export default function ContactFaqPreview({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  return (
    <section data-component="contactFaqPreview" className="cfp-section">
      {/* Aurora decorative blobs */}
      <div className="cfp-aurora cfp-aurora--1" aria-hidden="true" />
      <div className="cfp-aurora cfp-aurora--2" aria-hidden="true" />
      <div className="cfp-aurora cfp-aurora--3" aria-hidden="true" />

      {/* Oversized display type decoration */}
      <div className="cfp-deco-word" aria-hidden="true">FAQ</div>

      <div className="cfp-inner">
        {data.sectionTitle && (
          <div className="cfp-header">
            <span className="cfp-eyebrow">Before You Reach Out</span>
            <h2 className="cfp-title">{data.sectionTitle}</h2>
            <div className="cfp-title-bar" aria-hidden="true" />
          </div>
        )}

        {data.faqs && Array.isArray(data.faqs) && (
          <div className="cfp-faq-list">
            {data.faqs.map((faq, i) => {
              const question = faq.question || faq.title || faq.name || '';
              const answer = faq.answer || faq.description || faq.text || '';
              const isAlt = i % 2 === 1;
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`cfp-faq-item${isAlt ? ' cfp-faq-item--alt' : ''}${isOpen ? ' cfp-faq-item--open' : ''}`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="cfp-faq-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="cfp-faq-body">
                    <button
                      className="cfp-faq-q"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="cfp-faq-q-text">{question}</span>
                      <span className="cfp-faq-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      className="cfp-faq-answer"
                      style={{ display: isOpen ? 'block' : 'none' }}
                    >
                      <p>{answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {(data.viewAllText || data.viewAllUrl) && (
          <div className="cfp-footer">
            {data.viewAllText && (
              <a
                href={data.viewAllUrl || '/contact'}
                className="cfp-cta-btn"
              >
                {data.viewAllText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
