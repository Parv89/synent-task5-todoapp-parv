import React from 'react';
import TaskItem from './TaskItem';

/**
 * TaskList component maps and renders tasks list.
 */
export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <section className="task-list-container" aria-label="Task list">
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
