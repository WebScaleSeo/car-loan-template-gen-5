import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

function CounterTicker({ target, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const numTarget = parseInt(target, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numTarget));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numTarget);
    };
    requestAnimationFrame(step);
  }, [started, numTarget, duration]);

  return <span ref={ref} className="hero-ticker-num">{count}{suffix}</span>;
}

const BENEFITS = [
  {
    stat: '24',
    suffix: 'hr',
    label: 'Fast Approval',
    desc: 'Decision guaranteed',
  },
  {
    stat: '3',
    suffix: '.9%',
    label: 'Rates From',
    desc: 'APR available',
  },
  {
    stat: '84',
    suffix: 'mo',
    label: 'Flexible Terms',
    desc: 'Choose your timeline',
  },
];

const STACK_CARDS = [
  { value: '98%', label: 'Approval Rate', icon: '★' },
  { value: '$0', label: 'Hidden Fees', icon: '✓' },
  { value: '50K+', label: 'Loans Funded', icon: '◆' },
];

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section data-component="heroSection" className="hero-section">

      {/* Background layers: image + scrim + gradient */}
      <div className="hero-bg-image" aria-hidden="true" />
      <div className="hero-bg-scrim" aria-hidden="true" />
      <div className="hero-bg-gradient" aria-hidden="true" />

      {/* Organic flowing orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      {/* Fanned card stack — decorative with real content */}
      <div className="hero-card-stack" aria-hidden="true">
        {STACK_CARDS.map((card, i) => (
          <div className={`hero-card hero-card--${i + 1}`} key={i}>
            <span className="hero-card-icon">{card.icon}</span>
            <span className="hero-card-value">{card.value}</span>
            <span className="hero-card-label">{card.label}</span>
          </div>
        ))}
      </div>

      {/* Main content — stacked cinematic */}
      <div className="hero-content">
        <div className="hero-inner">

          {/* Eyebrow */}
          <span className="hero-eyebrow hero-animate hero-animate--1">
            Premium Auto Financing
          </span>

          {/* Headline — stroke + filled mix */}
          <h1 className="hero-headline hero-animate hero-animate--2">
            <span className="hero-headline__stroke">Drive Away</span>{' '}
            <span className="hero-headline__filled">Today</span>
            <br />
            <span className="hero-headline__filled">With a Loan </span>
            <span className="hero-headline__stroke">You'll Love</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline hero-animate hero-animate--3">
            {data.subheadline}
          </p>

          {/* Benefit chips with counter tickers */}
          <div className="hero-benefits hero-animate hero-animate--4">
            {BENEFITS.map((b, i) => (
              <div className="hero-benefit-chip" key={i}>
                <div className="hero-benefit-stat">
                  <CounterTicker target={b.stat} suffix={b.suffix} duration={2200 + i * 200} />
                </div>
                <div className="hero-benefit-label">{b.label}</div>
                <div className="hero-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas hero-animate hero-animate--5">
            <a
              href={data.ctaButtonUrl || '/contact'}
              className="hero-cta-primary"
            >
              <span className="hero-cta-primary__text">{data.ctaButtonText}</span>
              <span className="hero-cta-primary__glow" aria-hidden="true" />
            </a>
            <a
              href={data.secondaryCtaUrl || '/about'}
              className="hero-cta-secondary"
            >
              {data.secondaryCtaText}
              <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom clip divider */}
      <div className="hero-clip-bottom" aria-hidden="true" />
    </section>
  );
}
