import React, { useState, useEffect, useRef } from 'react';
import './ContactReassurance.css';

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function UserCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function LockClosedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function DocumentTextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function getIcon(iconName) {
  switch (iconName) {
    case 'clock': return <ClockIcon />;
    case 'shield-check': return <ShieldCheckIcon />;
    case 'user-circle': return <UserCircleIcon />;
    case 'lock-closed': return <LockClosedIcon />;
    case 'document-text': return <DocumentTextIcon />;
    case 'chat-bubble': return <ChatBubbleIcon />;
    default: return <ClockIcon />;
  }
}

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#@%&abcdefghijklmnopqrstuvwxyz';

export default function ContactReassurance({ data }) {
  // Initialize to real text so it's always readable even before scramble runs
  const [scrambledTitle, setScrambledTitle] = useState(data?.sectionTitle || '');
  const [isVisible, setIsVisible] = useState(false);
  const scrambleRef = useRef(null);
  const safetyRef = useRef(null);

  useEffect(() => {
    // Trigger immediately on mount
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !data?.sectionTitle) return;
    const text = data.sectionTitle;

    // Safety: always restore real text after 500ms no matter what
    safetyRef.current = setTimeout(() => {
      setScrambledTitle(text);
      if (scrambleRef.current) clearInterval(scrambleRef.current);
    }, 500);

    // Start scrambled, then decode — completes in ~300ms total (10ms * text.length)
    setScrambledTitle(
      text.split('').map(c => (c === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])).join('')
    );

    let iteration = 0;
    const total = text.length; // one character revealed per step
    const interval = setInterval(() => {
      setScrambledTitle(
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join('')
      );
      iteration++;
      if (iteration > total) {
        setScrambledTitle(text);
        clearInterval(interval);
        if (safetyRef.current) clearTimeout(safetyRef.current);
      }
    }, 10); // 10ms × 34 chars ≈ 340ms total — always done before screenshot

    scrambleRef.current = interval;
    return () => {
      clearInterval(interval);
      if (safetyRef.current) clearTimeout(safetyRef.current);
    };
  }, [isVisible, data?.sectionTitle]);

  if (!data) return null;

  return (
    <section
      data-component="contactReassurance"
      className="cr-section"
    >
      {/* Pattern layer */}
      <div className="cr-dot-pattern" aria-hidden="true" />

      {/* Decorative radial rings */}
      <div className="cr-rings" aria-hidden="true">
        <div className="cr-ring cr-ring-lg" />
        <div className="cr-ring cr-ring-md" />
        <div className="cr-ring cr-ring-sm" />
      </div>

      {/* Decorative blobs */}
      <div className="cr-blob cr-blob-1" aria-hidden="true" />
      <div className="cr-blob cr-blob-2" aria-hidden="true" />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <div className={`cr-header${isVisible ? ' cr-in' : ''}`}>
          <span className="cr-eyebrow font-body">Transparency &amp; Trust</span>
          {data.sectionTitle && (
            <h2 className="cr-title font-heading">
              {scrambledTitle}
            </h2>
          )}
          <div className="cr-title-underline" aria-hidden="true" />
        </div>

        {/* Central hub + radial card grid */}
        <div className="cr-radial-wrapper">
          {/* Central hub */}
          <div className={`cr-hub${isVisible ? ' cr-in' : ''}`} aria-hidden="true">
            <div className="cr-hub-outer">
              <div className="cr-hub-inner">
                <svg viewBox="0 0 64 64" className="cr-hub-svg">
                  <circle cx="32" cy="32" r="28" />
                  <circle cx="32" cy="32" r="18" />
                  <circle cx="32" cy="32" r="8" />
                  <line x1="32" y1="4" x2="32" y2="60" />
                  <line x1="4" y1="32" x2="60" y2="32" />
                  <line x1="12" y1="12" x2="52" y2="52" />
                  <line x1="52" y1="12" x2="12" y2="52" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          {data.reassurancePoints && Array.isArray(data.reassurancePoints) && (
            <div className="cr-grid">
              {data.reassurancePoints.map((item, i) => (
                <div
                  key={i}
                  className={`cr-card${isVisible ? ' cr-card-in' : ''}`}
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  <div className="cr-card-accent-bar" />

                  {item.iconName && (
                    <div className="cr-icon-wrap">
                      <div className="cr-icon-inner">
                        {getIcon(item.iconName)}
                      </div>
                    </div>
                  )}

                  <div className="cr-card-body">
                    {item.title && (
                      <h3 className="cr-card-title font-heading">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="cr-card-desc font-body">{item.description}</p>
                    )}
                  </div>

                  <div className="cr-card-glow" aria-hidden="true" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
