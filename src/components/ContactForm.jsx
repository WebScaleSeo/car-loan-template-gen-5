import React, { useState } from 'react';
import './ContactForm.css';

const FIELD_OPTIONS = {
  loanType: ['New Vehicle Loan', 'Used Vehicle Loan', 'Refinancing', 'Private Sale Financing'],
  estimatedLoanAmount: ['Under $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000+'],
  creditRange: ['Excellent (750+)', 'Good (700–749)', 'Fair (650–699)', 'Poor (Below 650)'],
};

export default function ContactForm({ data }) {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderField = (field) => {
    if (field.type === 'select') {
      const opts = field.options || FIELD_OPTIONS[field.fieldName] || [];
      return (
        <select name={field.fieldName} required={field.required} className="cf-input cf-select">
          <option value="">{field.placeholder || `Select ${field.label}`}</option>
          {opts.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    }
    if (field.type === 'textarea') {
      return (
        <textarea
          name={field.fieldName}
          placeholder={field.placeholder}
          required={field.required}
          className="cf-input cf-textarea"
          rows={4}
        />
      );
    }
    return (
      <input
        type={field.type}
        name={field.fieldName}
        placeholder={field.placeholder}
        required={field.required}
        className="cf-input"
        {...(field.type === 'tel' ? { maxLength: 14, pattern: '[\\d\\s\\-\\(\\)\\+]{10,14}' } : {})}
      />
    );
  };

  return (
    <section data-component="contactForm" className="cf-section">
      {/* Aurora gradient blobs */}
      <div className="cf-blob cf-blob-a" aria-hidden="true" />
      <div className="cf-blob cf-blob-b" aria-hidden="true" />
      <div className="cf-blob cf-blob-c" aria-hidden="true" />

      {/* Brutalist grid lines decoration */}
      <div className="cf-grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      <div className="cf-inner">
        {/* LEFT: editorial content */}
        <div className="cf-left">
          <div className="cf-tag font-body">LOAN INQUIRY</div>

          <h2 className="cf-title font-heading">{data.formTitle}</h2>

          <p className="cf-desc font-body">{data.formDescription}</p>

          <div className="cf-stroke-num" aria-hidden="true">01</div>

          <ul className="cf-bullets font-body">
            <li><span className="cf-arrow">→</span> Personalized rates in 24 hrs</li>
            <li><span className="cf-arrow">→</span> No obligation to proceed</li>
            <li><span className="cf-arrow">→</span> Strict data confidentiality</li>
          </ul>
        </div>

        {/* RIGHT: form — weighted heavier */}
        <div className="cf-right">
          <div className="cf-form-wrap">
            <div className="cf-form-offset" aria-hidden="true" />

            {submitted ? (
              <div className="cf-success">
                <div className="cf-success-ring">✓</div>
                <h3 className="font-heading">Inquiry Sent!</h3>
                <p className="font-body">A DriveWay Finance advisor will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cf-form">
                <div className="cf-fields">
                  {data.fields && data.fields.map((field, i) => (
                    <div
                      key={field.fieldName}
                      className={`cf-field-group${field.type === 'textarea' ? ' cf-full' : ''}${field.fieldName === 'message' ? ' cf-full' : ''}`}
                      style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                    >
                      <label className="cf-label font-body">
                        {field.label}
                        {field.required && <span className="cf-required">*</span>}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>

                <button type="submit" className="cf-submit font-heading">
                  <span>{data.submitButtonText || 'Send My Inquiry'}</span>
                  <span className="cf-btn-arrow">→</span>
                </button>

                {data.privacyNote && (
                  <p className="cf-privacy font-body">{data.privacyNote}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
