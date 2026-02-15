// Todo Type Definitions

export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoStats {
  total: number;
  active: number;
  completed: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
  };
}

export type FilterType = 'all' | 'low' | 'medium' | 'high';

export interface TodoState {
  todos: Todo[];
  filter: FilterType;
  showCompleted: boolean;
}

export interface TodoActions {
  addTodo: (title: string, priority: Priority) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: FilterType) => void;
  toggleShowCompleted: () => void;
  clearCompleted: () => void;
}
