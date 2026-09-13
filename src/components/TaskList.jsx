import React from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

/**
 * TaskList component maps and renders tasks or renders the context-sensitive EmptyState.
 */
export default function TaskList({
  tasks,
  currentFilter,
  totalTasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  if (tasks.length === 0) {
    return <EmptyState currentFilter={currentFilter} totalTasks={totalTasks} />;
  }

  return (
    <section className="task-list-container" id="task-list-section" aria-label="Task list items">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}
