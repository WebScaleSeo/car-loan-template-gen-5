import React, { useState, useEffect } from 'react';
import './CoreValues.css';

export default function CoreValues({ data }) {
  if (!data) return null;

  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor for typewriter feel (decorative only)
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-component="coreValues"
      className="cv-section"
    >
      {/* Decorative background layers */}
      <div className="cv-bg-mesh" aria-hidden="true" />
      <div className="cv-orb cv-orb-1" aria-hidden="true" />
      <div className="cv-orb cv-orb-2" aria-hidden="true" />
      <div className="cv-grid" aria-hidden="true" />

      <div className="cv-container">
        {/* L-SHAPED LAYOUT */}
        <div className="cv-l-wrap">

          {/* ── VERTICAL ARM of the L (left column header) ── */}
          <aside className="cv-header-arm">
            <span className="cv-eyebrow font-body">Our Principles</span>

            <h2 className="cv-title font-heading">
              {data.sectionTitle}
            </h2>

            <div className="cv-subtitle-block">
              <p className="cv-subtitle font-body">
                {data.sectionSubtitle}
                <span
                  className="cv-cursor"
                  aria-hidden="true"
                  style={{ opacity: cursorVisible ? 1 : 0 }}
                >|</span>
              </p>
            </div>

            <div className="cv-rule" aria-hidden="true" />

            <div className="cv-values-count">
              <span className="cv-count-num font-heading">
                {String(data.values?.length || 0).padStart(2, '0')}
              </span>
              <span className="cv-count-label font-body">Core Values</span>
            </div>

            {/* Decorative vertical text stripe */}
            <div className="cv-vertical-label" aria-hidden="true">
              DriveWay Finance
            </div>
          </aside>

          {/* ── HORIZONTAL ARM of the L (cards grid) ── */}
          <div className="cv-cards-arm">
            <div className="cv-cards-grid">
              {data.values && data.values.map((value, i) => (
                <div
                  key={i}
                  className="cv-card"
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                >
                  <div className="cv-card-inner">
                    {/* Accent top bar */}
                    <div className="cv-card-bar" aria-hidden="true" />

                    <div className="cv-card-num font-heading">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <h3 className="cv-card-title font-heading">
                      {value.title}
                    </h3>

                    <p className="cv-card-desc font-body">
                      {value.description}
                    </p>

                    {/* Corner glow */}
                    <div className="cv-card-glow" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
