import { call, put } from 'redux-saga/effects';
import { apiTask } from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadTask() {
  try {
    const response = yield call(apiTask.get, '');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
