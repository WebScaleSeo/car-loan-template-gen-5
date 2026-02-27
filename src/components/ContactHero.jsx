import React from 'react';
import './ContactHero.css';

export default function ContactHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="contactHero" className="contactHero-section">
      {/* Decorative background layers */}
      <div className="contactHero-bg-orb contactHero-orb-1" aria-hidden="true" />
      <div className="contactHero-bg-orb contactHero-orb-2" aria-hidden="true" />
      <div className="contactHero-bg-orb contactHero-orb-3" aria-hidden="true" />
      <div className="contactHero-mesh" aria-hidden="true" />

      {/* Iridescent border line top */}
      <div className="contactHero-border-line contactHero-border-top" aria-hidden="true" />

      <div className="contactHero-inner">

        {/* Eyebrow badge */}
        <div className="contactHero-eyebrow">
          <span className="contactHero-eyebrow-dot" aria-hidden="true" />
          <span>DriveWay Finance</span>
        </div>

        {/* Headline with typewriter */}
        {data.headline && (
          <h1 className="contactHero-headline">
            <span className="contactHero-headline-gradient">{data.headline}</span>
          </h1>
        )}

        {/* Subheadline */}
        {data.subheadline && (
          <p className="contactHero-subheadline">{data.subheadline}</p>
        )}

        {/* CTA Button */}
        <div className="contactHero-cta-wrap">
          <a href="/contact" className="contactHero-cta-btn">
            <span className="contactHero-cta-text">Start Your Application</span>
            <span className="contactHero-cta-arrow" aria-hidden="true">→</span>
            <span className="contactHero-cta-glow" aria-hidden="true" />
          </a>
          <a href="tel:+18005551234" className="contactHero-cta-secondary">
            Call a Specialist
          </a>
        </div>

        {/* Compact Testimonial */}
        <div className="contactHero-testimonial">
          <div className="contactHero-testimonial-inner">
            <div className="contactHero-testimonial-stars" aria-label="5 stars">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="contactHero-star" aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote className="contactHero-testimonial-quote">
              "DriveWay made refinancing effortless — I saved over $200 a month within a week of reaching out."
            </blockquote>
            <footer className="contactHero-testimonial-footer">
              <span className="contactHero-testimonial-avatar" aria-hidden="true">MR</span>
              <div className="contactHero-testimonial-meta">
                <strong className="contactHero-testimonial-name">Marcus R.</strong>
                <span className="contactHero-testimonial-role">DriveWay Customer, 2024</span>
              </div>
            </footer>
          </div>
          <div className="contactHero-testimonial-border-animated" aria-hidden="true" />
        </div>

      </div>

      {/* Bottom border */}
      <div className="contactHero-border-line contactHero-border-bottom" aria-hidden="true" />
    </section>
  );
}
