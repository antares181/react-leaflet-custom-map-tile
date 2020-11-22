import { combineReducers } from 'redux';

import repositories from './repositories';
import task from './task';

export default combineReducers({
  repositories,
  task,
});
