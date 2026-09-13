import React from 'react';

/**
 * TaskStats component displays dashboard counter cards for Total, Active, and Completed tasks.
 */
export default function TaskStats({ totalCount = 0, activeCount = 0, completedCount = 0 }) {
  return (
    <section className="task-stats-grid" aria-label="Task statistics overview">
      <div className="stat-card stat-total">
        <div className="stat-icon-wrapper" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="13" y2="17" />
          </svg>
        </div>
        <div className="stat-content">
          <span className="stat-value">{totalCount}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
      </div>

      <div className="stat-card stat-active">
        <div className="stat-icon-wrapper" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div className="stat-content">
          <span className="stat-value">{activeCount}</span>
          <span className="stat-label">Active Tasks</span>
        </div>
      </div>

      <div className="stat-card stat-completed">
        <div className="stat-icon-wrapper" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="stat-content">
          <span className="stat-value">{completedCount}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
    </section>
  );
}
