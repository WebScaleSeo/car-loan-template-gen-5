import React, { useState, useEffect, useRef } from 'react';
import './HomeFaqPreview.css';

export default function HomeFaqPreview({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, i]));
          }
        },
        { threshold: 0.12 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  if (!data) return null;

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section data-component="homeFaqPreview" className="faq-section">
      <div className="faq-bg-deco" aria-hidden="true">
        <div className="faq-orb faq-orb-1" />
        <div className="faq-orb faq-orb-2" />
        <div className="faq-dot-grid" />
        <div className="faq-rule faq-rule-1" />
        <div className="faq-rule faq-rule-2" />
      </div>

      <div className="container mx-auto px-6">
        <div className="faq-header">
          <span className="faq-eyebrow font-body">Frequently Asked</span>
          <h2 className="faq-title font-heading">{data.sectionTitle}</h2>
          <p className="faq-subtitle font-body">{data.sectionSubtitle}</p>
        </div>

        <div className="faq-zigzag-list">
          {data.faqs && data.faqs.map((faq, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className={`faq-item faq-item--${i % 2 === 0 ? 'even' : 'odd'} ${visibleItems.has(i) ? 'faq-item--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className="faq-item-inner">
                <div className="faq-index-col">
                  <span className="faq-index-num font-heading">0{i + 1}</span>
                  <div className="faq-index-line" />
                </div>

                <button
                  className={`faq-card ${openIndex === i ? 'faq-card--open' : ''}`}
                  onClick={() => handleToggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <div className="faq-card-tone-bar" />
                  <div className="faq-card-body">
                    <div className="faq-q-row">
                      <h3 className="faq-question font-heading">{faq.question}</h3>
                      <span className={`faq-chevron ${openIndex === i ? 'faq-chevron--open' : ''}`} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    <div className={`faq-answer-region ${openIndex === i ? 'faq-answer-region--open' : ''}`}>
                      <p className="faq-answer font-body">{faq.answer}</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {data.viewAllText && data.viewAllUrl && (
          <div className="faq-footer-row">
            <a href={data.viewAllUrl} className="faq-view-all font-body">
              <span className="faq-view-all-text">{data.viewAllText}</span>
              <span className="faq-view-all-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
