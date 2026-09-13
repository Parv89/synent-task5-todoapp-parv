import React from 'react';

/**
 * Header component displaying branding, logo, subtitle, and productivity progress summary.
 */
export default function Header({ totalCount = 0, completedCount = 0 }) {
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="logo-icon-wrapper" aria-hidden="true">
          <svg
            className="brand-logo"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="brand-text">
          <div className="title-row">
            <h1 className="brand-title">TaskFlow</h1>
            <span className="brand-badge">Synent Dev</span>
          </div>
          <p className="brand-subtitle">Organize your day, one task at a time</p>
        </div>
      </div>

      <div className="header-summary" aria-label="Productivity progress summary">
        <div className="summary-info">
          <span className="summary-label">Productivity Rate</span>
          <span className="summary-score">{completionPercentage}% Done</span>
        </div>
        <div 
          className="progress-bar-container" 
          role="progressbar" 
          aria-valuenow={completionPercentage} 
          aria-valuemin="0" 
          aria-valuemax="100"
          aria-label="Task completion percentage"
        >
          <div
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </header>
  );
}
