/**
 * Action types
 */
export enum TaskTypes {
  LOAD_REQUEST = '@task/LOAD_REQUEST',
  LOAD_SUCCCES = '@task/LOAD_SUCCCES',
  LOAD_FAILURE = '@task/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Task {
  id: number
  title: string
  completed: boolean;
  userId: number;
}

/**
 * State type
 */
export interface TaskState {
  readonly data: Task[]
  readonly loading: boolean
  readonly error: boolean
}
