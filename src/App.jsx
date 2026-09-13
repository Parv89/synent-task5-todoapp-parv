import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskStats from './components/TaskStats';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Handler: Add Task
  const handleAddTask = (text) => {
    const newTask = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Handler: Toggle Task completion status
  const handleToggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler: Edit Task text
  const handleEditTask = (taskId, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  // Handler: Delete Task
  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="app-wrapper">
      <main className="app-container">
        <Header totalCount={totalTasks} completedCount={completedTasks} />
        <TaskInput onAddTask={handleAddTask} />
        <TaskStats
          totalCount={totalTasks}
          activeCount={activeTasks}
          completedCount={completedTasks}
        />
        <TaskList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      </main>
      <footer className="app-footer">
        <p><strong>TaskFlow</strong> &bull; Synent Technologies Web Development Internship Task 5</p>
        <p>Developed with React &amp; Vite &bull; Client-side LocalStorage Persistence</p>
      </footer>
    </div>
  );
}
