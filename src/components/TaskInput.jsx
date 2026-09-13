import React, { useState } from 'react';

/**
 * TaskInput component handles adding new tasks with validation and keyboard controls.
 */
export default function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = taskText.trim();

    if (!trimmed) {
      setErrorMessage('Please enter a task description before adding.');
      return;
    }

    onAddTask(trimmed);
    setTaskText('');
    setErrorMessage('');
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <section className="task-input-section" aria-label="Add new task">
      <form onSubmit={handleSubmit} className="task-input-form" noValidate>
        <div className="input-group">
          <div className="input-field-wrapper">
            <span className="input-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </span>
            <input
              type="text"
              id="new-task-input"
              className={`task-text-input ${errorMessage ? 'has-error' : ''}`}
              placeholder="What do you need to accomplish today?"
              value={taskText}
              onChange={handleChange}
              aria-label="New task description"
              aria-invalid={errorMessage ? 'true' : 'false'}
              aria-describedby={errorMessage ? 'task-input-error' : undefined}
              maxLength={250}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary add-task-btn"
            aria-label="Add Task to list"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add Task</span>
          </button>
        </div>

        {errorMessage && (
          <div id="task-input-error" className="input-error-message" role="alert">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="error-icon">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </section>
  );
}
