import { TeamsTodo } from '../types';

export interface ITeamsClient {
  createTodo(todo: TeamsTodo): Promise<string>;
  updateTodo(todoId: string, updates: Partial<TeamsTodo>): Promise<void>;
  deleteTodo(todoId: string): Promise<void>;
  getTodoById(todoId: string): Promise<TeamsTodo | null>;
}