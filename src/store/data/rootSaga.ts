import { all, takeLatest } from 'redux-saga/effects';
import { load } from './repositories/sagas';

import { RepositoriesTypes } from './repositories/types';
import { loadTask } from './task/sagas';
import { TaskTypes } from './task/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(TaskTypes.LOAD_REQUEST, loadTask),
  ]);
}
