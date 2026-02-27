import React, { useState } from 'react';
import './GeneralFaq.css';

export default function GeneralFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  if (!data) return null;

  const faqs = data.faqs || [];
  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ item, index, colOffset }) => {
    const globalIndex = index * 2 + colOffset;
    const isOpen = openIndex === globalIndex;
    return (
      <div
        className={`gfaq-item ${isOpen ? 'gfaq-item--open' : ''}`}
        style={{ animationDelay: `${(globalIndex * 0.12) + 0.2}s` }}
      >
        <button
          className="gfaq-question"
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          aria-expanded={isOpen}
        >
          <span className="gfaq-q-number">
            {String(globalIndex + 1).padStart(2, '0')}
          </span>
          <span className="gfaq-q-text">{item.question}</span>
          <span className="gfaq-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d={isOpen ? 'M4 10h12' : 'M10 4v12M4 10h12'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
        <div
          className="gfaq-answer"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <p className="gfaq-answer-text">{item.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <section data-component="generalFaq" className="gfaq-section">
      {/* Decorative background elements */}
      <div className="gfaq-bg-pattern" aria-hidden="true" />
      <div className="gfaq-orb gfaq-orb--1" aria-hidden="true" />
      <div className="gfaq-orb gfaq-orb--2" aria-hidden="true" />
      <div className="gfaq-geo gfaq-geo--ring" aria-hidden="true" />
      <div className="gfaq-geo gfaq-geo--diamond" aria-hidden="true" />

      <div className="container mx-auto px-6 gfaq-inner">
        {/* Header */}
        <header className="gfaq-header">
          <div className="gfaq-eyebrow">
            <span className="gfaq-eyebrow-line" />
            <span className="gfaq-eyebrow-text">Knowledge Base</span>
            <span className="gfaq-eyebrow-line" />
          </div>
          {data.sectionTitle && (
            <h2 className="gfaq-title font-heading">{data.sectionTitle}</h2>
          )}
          <p className="gfaq-subtitle font-body">
            Everything you need to know about car financing, explained clearly.
          </p>
        </header>

        {/* Staggered columns */}
        <div className="gfaq-columns">
          <div className="gfaq-col gfaq-col--left">
            {leftCol.map((item, i) => (
              <FaqItem key={i * 2} item={item} index={i} colOffset={0} />
            ))}
          </div>
          <div className="gfaq-col gfaq-col--right">
            {rightCol.map((item, i) => (
              <FaqItem key={i * 2 + 1} item={item} index={i} colOffset={1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
