import React from 'react';
import './TeamOverview.css';

export default function TeamOverview({ data }) {
  if (!data) return null;
  return (
    <section data-component="teamOverview" className="team-overview">

      {/* Decorative background blobs — purely visual, no layout impact */}
      <div className="to-blob to-blob--1" aria-hidden="true" />
      <div className="to-blob to-blob--2" aria-hidden="true" />

      {/* Dark gradient hero band */}
      <div className="to-hero">
        <div className="to-hero__dot-grid" aria-hidden="true" />
        <div className="to-hero__inner container mx-auto px-6">
          <span className="to-eyebrow font-body">Our People</span>
          {data.sectionTitle && (
            <h2 className="to-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="to-accent-bar" aria-hidden="true" />
        </div>
      </div>

      {/* Body content — overlaps hero bottom edge for grid-breaking effect */}
      <div className="to-body container mx-auto px-6">

        {/* Description card */}
        {data.description && (
          <div className="to-desc">
            <div className="to-desc__stripe" aria-hidden="true" />
            <p className="to-desc__text font-body">{data.description}</p>
          </div>
        )}

        {/* Team highlights grid */}
        {data.teamHighlights && Array.isArray(data.teamHighlights) && (
          <div className="to-grid">
            {data.teamHighlights.map((item, i) => (
              <div
                key={i}
                className="to-card"
                style={{ '--card-idx': i }}
              >
                {/* Animated gradient border wrapper */}
                <div className="to-card__border">
                  <div className="to-card__inner">
                    <div className="to-card__num font-heading" aria-hidden="true">
                      0{i + 1}
                    </div>
                    {item.role && (
                      <h3 className="to-card__role font-heading">{item.role}</h3>
                    )}
                    {item.description && (
                      <p className="to-card__desc font-body">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
