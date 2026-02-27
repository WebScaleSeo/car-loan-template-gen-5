import React from 'react';
import './MissionStatement.css';

export default function MissionStatement({ data }) {
  if (!data) return null;

  return (
    <section data-component="missionStatement" className="ms-section">
      {/* Decorative background layers */}
      <div className="ms-aurora" aria-hidden="true" />
      <div className="ms-orb ms-orb--1" aria-hidden="true" />
      <div className="ms-orb ms-orb--2" aria-hidden="true" />

      {/* Oversized display type decoration */}
      <div className="ms-display-bg" aria-hidden="true">MISSION</div>

      <div className="ms-inner">
        {/* Left column — label + decorative accent */}
        <div className="ms-col-left ms-slide-left">
          <div className="ms-eyebrow">
            <span className="ms-eyebrow-line" />
            {data.sectionTitle && (
              <span className="ms-eyebrow-text">{data.sectionTitle}</span>
            )}
          </div>
          <div className="ms-big-number" aria-hidden="true">01</div>
          <div className="ms-accent-bar" />
        </div>

        {/* Right column — main content with broken grid overlap */}
        <div className="ms-col-right">
          {/* Mission block */}
          <div className="ms-mission-block ms-slide-right">
            <h2 className="ms-mission-heading">
              Making financing
              <em className="ms-heading-accent"> simple,<br />fair,</em>
              <span className="ms-heading-plain"> and accessible.</span>
            </h2>
            {data.missionText && (
              <p className="ms-mission-body">{data.missionText}</p>
            )}
          </div>

          {/* Vision block — overlapping card */}
          {data.visionText && (
            <div className="ms-vision-block ms-slide-right ms-slide-right--delayed">
              <div className="ms-vision-label">Our Vision</div>
              <p className="ms-vision-body">{data.visionText}</p>
              <div className="ms-vision-rule" />
            </div>
          )}
        </div>
      </div>

      {/* Bottom decorative rule */}
      <div className="ms-bottom-rule" aria-hidden="true" />
    </section>
  );
}
