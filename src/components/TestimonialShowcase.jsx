import React from 'react';
import './TestimonialShowcase.css';

export default function TestimonialShowcase({ data }) {
  if (!data) return null;

  return (
    <section data-component="testimonialShowcase" className="ts-section">
      {/* Rotating gradient orbs — decorative */}
      <div className="ts-orb ts-orb-1" aria-hidden="true" />
      <div className="ts-orb ts-orb-2" aria-hidden="true" />

      <div className="ts-inner">
        {/* Left panel — vertical arm of the L (dark, moody) */}
        <div className="ts-left-panel">
          <div className="ts-spotlight-beam" aria-hidden="true" />

          <div className="ts-header-content">
            <span className="ts-eyebrow font-body">Customer Voices</span>

            <h2 className="ts-main-title font-heading">
              {data.sectionTitle}
            </h2>

            <p className="ts-sub-text font-body">
              {data.sectionSubtitle}
            </p>

            <div className="ts-stat-block">
              <div className="ts-stat">
                <span className="ts-stat-num font-heading">98%</span>
                <span className="ts-stat-label font-body">Satisfaction Rate</span>
              </div>
              <div className="ts-stat">
                <span className="ts-stat-num font-heading">12k+</span>
                <span className="ts-stat-label font-body">Loans Approved</span>
              </div>
            </div>

            <div className="ts-gradient-bar" aria-hidden="true" />
          </div>
        </div>

        {/* Right panel — cards floating over light gradient area */}
        <div className="ts-right-panel">
          <div className="ts-cards-grid">
            {data.testimonials && data.testimonials.map((item, i) => (
              <div
                key={i}
                className="ts-card"
                style={{ animationDelay: `${0.2 + i * 0.18}s` }}
              >
                <div className="ts-card-spotlight" aria-hidden="true" />
                <div className="ts-quote-mark font-heading" aria-hidden="true">&ldquo;</div>
                <p className="ts-card-quote font-body">{item.quote}</p>
                <div className="ts-card-footer">
                  <div className="ts-avatar font-heading" aria-hidden="true">
                    {item.authorName?.charAt(0)}
                  </div>
                  <div className="ts-author-info">
                    <span className="ts-author-name font-heading">{item.authorName}</span>
                    <span className="ts-loan-badge font-body">{item.loanType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust fill — fills empty bottom-right of L layout */}
          <div className="ts-trust-row">
            <div className="ts-trust-stars font-heading" aria-label="5 out of 5 stars">
              <span aria-hidden="true">★★★★★</span>
            </div>
            <p className="ts-trust-text font-body">
              Rated <strong className="ts-trust-strong font-heading">5 stars</strong> by thousands of satisfied drivers.
              Fast approvals, honest rates, zero runaround.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar — horizontal arm of the L */}
      <div className="ts-bottom-bar">
        <div className="ts-bottom-inner">
          <div className="ts-bottom-beam" aria-hidden="true" />
          <p className="ts-bottom-tagline font-body">
            <strong className="ts-bottom-strong font-heading">DriveWay Finance</strong>
            {' '}— Trusted by real drivers across the country.
          </p>
        </div>
      </div>
    </section>
  );
}
