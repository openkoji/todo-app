// Unit Tests for Todo App Helpers

import {
  generateId,
  getPriorityColor,
  getPriorityLabel,
  filterTodos,
  calculateStats,
  validateTodoInput,
} from '../src/utils/helpers';
import { Todo } from '../src/types';

describe('Helper Utilities', () => {
  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    it('should include timestamp', () => {
      const id = generateId();
      expect(id.split('-')[0]).toBeDefined();
    });
  });

  describe('getPriorityColor', () => {
    it('should return correct colors', () => {
      expect(getPriorityColor('low')).toBe('#4CAF50');
      expect(getPriorityColor('medium')).toBe('#FF9800');
      expect(getPriorityColor('high')).toBe('#F44336');
    });
  });

  describe('getPriorityLabel', () => {
    it('should capitalize priority labels', () => {
      expect(getPriorityLabel('low')).toBe('Low');
      expect(getPriorityLabel('medium')).toBe('Medium');
      expect(getPriorityLabel('high')).toBe('High');
    });
  });

  describe('filterTodos', () => {
    const mockTodos: Todo[] = [
      { id: '1', title: 'Task 1', completed: false, priority: 'low', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', title: 'Task 2', completed: true, priority: 'medium', createdAt: new Date(), updatedAt: new Date() },
      { id: '3', title: 'Task 3', completed: false, priority: 'high', createdAt: new Date(), updatedAt: new Date() },
      { id: '4', title: 'Task 4', completed: false, priority: 'low', createdAt: new Date(), updatedAt: new Date() },
    ];

    it('should filter by priority', () => {
      const filtered = filterTodos(mockTodos, 'low', true);
      expect(filtered.length).toBe(2);
      expect(filtered.every(t => t.priority === 'low')).toBe(true);
    });

    it('should show completed when enabled', () => {
      const filtered = filterTodos(mockTodos, 'all', true);
      expect(filtered.length).toBe(4);
    });

    it('should hide completed when disabled', () => {
      const filtered = filterTodos(mockTodos, 'all', false);
      expect(filtered.length).toBe(3);
      expect(filtered.every(t => !t.completed)).toBe(true);
    });
  });

  describe('calculateStats', () => {
    it('should calculate correct statistics', () => {
      const mockTodos: Todo[] = [
        { id: '1', title: 'Task 1', completed: false, priority: 'low', createdAt: new Date(), updatedAt: new Date() },
        { id: '2', title: 'Task 2', completed: true, priority: 'medium', createdAt: new Date(), updatedAt: new Date() },
        { id: '3', title: 'Task 3', completed: false, priority: 'high', createdAt: new Date(), updatedAt: new Date() },
      ];

      const stats = calculateStats(mockTodos);
      expect(stats.total).toBe(3);
      expect(stats.active).toBe(2);
      expect(stats.completed).toBe(1);
      expect(stats.byPriority.low).toBe(1);
      expect(stats.byPriority.medium).toBe(1);
      expect(stats.byPriority.high).toBe(1);
    });
  });

  describe('validateTodoInput', () => {
    it('should reject empty input', () => {
      expect(validateTodoInput('')).toBe(false);
      expect(validateTodoInput('   ')).toBe(false);
    });

    it('should reject input that is too long', () => {
      const longInput = 'a'.repeat(201);
      expect(validateTodoInput(longInput)).toBe(false);
    });

    it('should accept valid input', () => {
      expect(validateTodoInput('Buy groceries')).toBe(true);
      expect(validateTodoInput('a'.repeat(200))).toBe(true);
    });
  });
});
