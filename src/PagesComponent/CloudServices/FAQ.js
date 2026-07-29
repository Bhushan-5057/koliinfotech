import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq-item-premium ${faq.open ? "open" : ""}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question-row">
        <span className="faq-question-text">{faq.question}</span>
        <span className="faq-icon-wrapper">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="faq-chevron"
          >
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </span>
      </div>
      <div className="faq-answer-container">
        <div className="faq-answer-content">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
