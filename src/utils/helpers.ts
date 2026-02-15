// Helper Utilities

import { Priority, Todo } from '../types';

/**
 * Generate a unique ID for todos
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get priority color for UI display
 */
export const getPriorityColor = (priority: Priority): string => {
  const colors = {
    low: '#4CAF50',
    medium: '#FF9800',
    high: '#F44336',
  };
  return colors[priority];
};

/**
 * Get priority label with capitalization
 */
export const getPriorityLabel = (priority: Priority): string => {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
};

/**
 * Filter todos by various criteria
 */
export const filterTodos = (
  todos: Todo[],
  filter: 'all' | 'low' | 'medium' | 'high',
  showCompleted: boolean
): Todo[] => {
  return todos.filter(todo => {
    const matchesFilter = filter === 'all' || todo.priority === filter;
    const matchesShow = showCompleted || !todo.completed;
    return matchesFilter && matchesShow;
  });
};

/**
 * Calculate todo statistics
 */
export const calculateStats = (todos: Todo[]) => {
  return {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
    byPriority: {
      low: todos.filter(t => t.priority === 'low').length,
      medium: todos.filter(t => t.priority === 'medium').length,
      high: todos.filter(t => t.priority === 'high').length,
    },
  };
};

/**
 * Validate todo input
 */
export const validateTodoInput = (input: string): boolean => {
  return input.trim().length > 0 && input.trim().length <= 200;
};
