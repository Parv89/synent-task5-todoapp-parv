import React from 'react';

/**
 * TaskFilters component provides filter controls (ALL, ACTIVE, COMPLETED)
 * and the Clear Completed action button.
 */
export default function TaskFilters({
  currentFilter,
  onFilterChange,
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  const filterOptions = [
    { id: 'all', label: 'All', count: totalCount },
    { id: 'active', label: 'Active', count: activeCount },
    { id: 'completed', label: 'Completed', count: completedCount },
  ];

  return (
    <div className="task-controls-bar" aria-label="Task filters and actions">
      {/* Filter Tabs */}
      <div className="filter-buttons-group" role="tablist" aria-label="Filter tasks">
        {filterOptions.map((opt) => {
          const isActive = currentFilter === opt.id;
          return (
            <button
              key={opt.id}
              role="tab"
              type="button"
              id={`filter-tab-${opt.id}`}
              className={`filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => onFilterChange(opt.id)}
              aria-selected={isActive}
              aria-controls="task-list-section"
            >
              <span>{opt.label}</span>
              <span className="filter-badge" aria-label={`${opt.count} tasks`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clear Completed Action */}
      <button
        type="button"
        className="clear-completed-btn"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        aria-label={`Clear ${completedCount} completed tasks`}
        title={completedCount === 0 ? 'No completed tasks to clear' : 'Remove all completed tasks'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clear-btn-icon" aria-hidden="true">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        <span>Clear Completed ({completedCount})</span>
      </button>
    </div>
  );
}
