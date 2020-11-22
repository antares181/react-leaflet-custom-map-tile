import { action } from 'typesafe-actions';
import { Task, TaskTypes } from './types';

export const loadRequest = () => action(TaskTypes.LOAD_REQUEST);

export const loadSuccess = (data: Task[]) => action(TaskTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(TaskTypes.LOAD_FAILURE);
