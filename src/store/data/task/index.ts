import { Reducer } from 'redux';
import { TaskState, TaskTypes } from './types';

const INITIAL_STATE: TaskState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TaskTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case TaskTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
