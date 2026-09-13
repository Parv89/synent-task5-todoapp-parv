import React, { useState, useRef, useEffect } from 'react';

/**
 * TaskItem component rendering individual task card with toggle, edit, and delete functionality.
 */
export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editError, setEditError] = useState('');
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEdit = () => {
    setEditText(task.text);
    setEditError('');
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditText(task.text);
    setEditError('');
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const trimmed = editText.trim();
    if (!trimmed) {
      setEditError('Task text cannot be empty.');
      return;
    }
    onEdit(task.id, trimmed);
    setIsEditing(false);
    setEditError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  // Format date readable
  const formattedDate = (() => {
    try {
      const d = new Date(task.createdAt);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '';
    }
  })();

  return (
    <article className={`task-item-card ${task.completed ? 'is-completed' : ''}`}>
      <div className="task-item-main">
        {/* Accessible Checkbox */}
        <label className="custom-checkbox-label" htmlFor={`task-check-${task.id}`}>
          <input
            type="checkbox"
            id={`task-check-${task.id}`}
            className="custom-checkbox-input"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
          />
          <span className="custom-checkbox-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="checkbox-check-icon">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </label>

        {/* Content or Inline Edit */}
        {isEditing ? (
          <div className="task-edit-form">
            <input
              ref={editInputRef}
              type="text"
              className={`task-edit-input ${editError ? 'has-error' : ''}`}
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
                if (editError) setEditError('');
              }}
              onKeyDown={handleKeyDown}
              aria-label="Edit task description"
              maxLength={250}
            />
            <span className="task-edit-hint">
              {editError ? (
                <strong style={{ color: 'var(--danger-600)' }}>{editError}</strong>
              ) : (
                'Press Enter to save • Esc to cancel'
              )}
            </span>
          </div>
        ) : (
          <div className="task-details">
            <span className="task-text">{task.text}</span>
            <div className="task-meta">
              <span className={`task-status-pill ${task.completed ? 'status-completed' : 'status-active'}`}>
                {task.completed ? 'Completed' : 'Active'}
              </span>
              {formattedDate && (
                <span className="task-timestamp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="meta-icon">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {formattedDate}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Controls */}
      <div className="task-actions-group">
        {isEditing ? (
          <>
            <button
              type="button"
              className="action-btn action-btn-save"
              onClick={handleSaveEdit}
              aria-label="Save edited task"
              title="Save (Enter)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <button
              type="button"
              className="action-btn action-btn-cancel"
              onClick={handleCancelEdit}
              aria-label="Cancel editing"
              title="Cancel (Esc)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="action-btn action-btn-edit"
              onClick={handleStartEdit}
              aria-label={`Edit task "${task.text}"`}
              title="Edit Task"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            <button
              type="button"
              className="action-btn action-btn-delete"
              onClick={() => onDelete(task.id)}
              aria-label={`Delete task "${task.text}"`}
              title="Delete Task"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </>
        )}
      </div>
    </article>
  );
}
