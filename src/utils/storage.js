/**
 * LocalStorage utility module for TaskFlow.
 * Handles serialization, parsing, error recovery, and data validation safely.
 */

const STORAGE_KEY = 'taskflow_tasks_v1';

/**
 * Load tasks safely from localStorage.
 * Falls back to an empty array if data is missing, corrupted, or invalid.
 * @returns {Array} Array of valid task objects
 */
export function loadTasksFromStorage() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) {
      return [];
    }

    const parsed = JSON.parse(rawData);

    // Validate that parsed data is an array
    if (!Array.isArray(parsed)) {
      console.warn('[TaskFlow Storage] Stored data is not an array. Resetting.');
      return [];
    }

    // Sanitize and validate individual items
    const sanitized = parsed.filter(
      (item) =>
        item &&
        typeof item === 'object' &&
        typeof item.id === 'string' &&
        typeof item.text === 'string' &&
        typeof item.completed === 'boolean'
    );

    return sanitized;
  } catch (error) {
    console.error('[TaskFlow Storage] Failed to load tasks from localStorage:', error);
    return [];
  }
}

/**
 * Save tasks safely to localStorage.
 * @param {Array} tasks Array of task objects
 */
export function saveTasksToStorage(tasks) {
  try {
    if (!Array.isArray(tasks)) {
      return;
    }
    const serialized = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('[TaskFlow Storage] Failed to save tasks to localStorage:', error);
  }
}
