import React from 'react';
import './HowItWorks.css';

export default function HowItWorks({ data }) {
  if (!data) return null;

  return (
    <section data-component="howItWorks" className="hiw-section">
      {/* Dot-grid pattern layer */}
      <div className="hiw-pattern" aria-hidden="true" />

      {/* Ambient radial glow — decorative */}
      <div className="hiw-glow-center" aria-hidden="true" />

      {/* Top ribbon banner */}
      <div className="hiw-top-ribbon" aria-hidden="true" />

      {/* Mid-section decorative horizontal band */}
      <div className="hiw-mid-band" aria-hidden="true" />

      <div className="hiw-inner">
        {/* Section header */}
        <header className="hiw-header">
          <div className="hiw-eyebrow">
            <span className="hiw-eyebrow__line" aria-hidden="true" />
            <span className="hiw-eyebrow__label font-body">PROCESS OVERVIEW</span>
            <span className="hiw-eyebrow__line" aria-hidden="true" />
          </div>

          {data.sectionTitle && (
            <h2 className="hiw-title font-heading">{data.sectionTitle}</h2>
          )}

          {data.sectionSubtitle && (
            <p className="hiw-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </header>

        {/* Steps — 2×2 grid on desktop */}
        {data.steps && Array.isArray(data.steps) && (
          <div className="hiw-steps">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className="hiw-step-panel"
                style={{ animationDelay: `${0.15 + i * 0.13}s` }}
              >
                {/* Left accent ribbon */}
                <div className="hiw-step-ribbon" aria-hidden="true" />

                <div className="hiw-step-inner">
                  {/* Giant step number — typographic scale contrast */}
                  <span className="hiw-step-numeral font-heading" aria-hidden="true">
                    {step.stepNumber || String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Step content */}
                  <div className="hiw-step-body">
                    <span className="hiw-step-micro font-body">STEP</span>
                    {step.title && (
                      <h3 className="hiw-step-title font-heading">{step.title}</h3>
                    )}
                    {step.description && (
                      <p className="hiw-step-desc font-body">{step.description}</p>
                    )}
                  </div>
                </div>

                {/* Bottom connector line — decorative */}
                <div className="hiw-step-underline" aria-hidden="true" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
