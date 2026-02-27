import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs({ data }) {
  if (!data) return null;

  return (
    <section id="why-choose-us" data-component="whyChooseUs" className="wcu-section">
      {/* Layered backgrounds */}
      <div className="wcu-bg-image" aria-hidden="true" />
      <div className="wcu-bg-overlay" aria-hidden="true" />
      <div className="wcu-bg-gradient" aria-hidden="true" />

      {/* Top accent ribbon */}
      <div className="wcu-ribbon-bar" aria-hidden="true" />

      {/* Decorative floating orbs */}
      <div className="wcu-orb wcu-orb--1" aria-hidden="true" />
      <div className="wcu-orb wcu-orb--2" aria-hidden="true" />
      <div className="wcu-orb wcu-orb--3" aria-hidden="true" />

      {/* Diagonal corner banner */}
      <div className="wcu-corner-banner" aria-hidden="true">
        <span>Premium Finance</span>
      </div>

      <div className="wcu-inner container mx-auto px-6">

        {/* Editorial header */}
        <div className="wcu-header">
          <div className="wcu-eyebrow font-body">
            <span className="wcu-eyebrow-line" />
            <span>The Difference Is Clear</span>
            <span className="wcu-eyebrow-line" />
          </div>

          <h2 className="wcu-title font-heading">
            <span className="wcu-typewriter" aria-label={data.sectionTitle}>
              {data.sectionTitle}
            </span>
          </h2>

          {/* Banner ribbon wrapping description */}
          <div className="wcu-desc-banner">
            <div className="wcu-desc-ribbon-accent" aria-hidden="true" />
            <p className="wcu-description font-body">{data.sectionDescription}</p>
          </div>
        </div>

        {/* Decorative editorial separator */}
        <div className="wcu-separator" aria-hidden="true">
          <span className="wcu-sep-line" />
          <span className="wcu-sep-diamond" />
          <span className="wcu-sep-line" />
        </div>

        {/* Differentiator cards — grid-breaking overlap layout */}
        <div className="wcu-grid">
          {data.differentiators?.map((item, i) => (
            <div
              key={i}
              className={`wcu-card wcu-card--${i} ${i === 0 ? 'wcu-card--featured' : ''}`}
              style={{ animationDelay: `${0.15 * i + 0.3}s` }}
            >
              {/* Ribbon badge on featured card */}
              {i === 0 && (
                <div className="wcu-card-corner-ribbon" aria-hidden="true">
                  <span>Top Pick</span>
                </div>
              )}

              {/* Ghost number watermark */}
              <span className="wcu-card-watermark" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Accent top bar */}
              <div className="wcu-card-accent-bar" aria-hidden="true" />

              <div className="wcu-card-body">
                <h3 className="wcu-card-title font-heading">{item.title}</h3>
                <p className="wcu-card-desc font-body">{item.description}</p>
              </div>

              {/* Bottom hover indicator */}
              <div className="wcu-card-hover-line" aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom ribbon decoration */}
      <div className="wcu-ribbon-bottom" aria-hidden="true" />
    </section>
  );
}
