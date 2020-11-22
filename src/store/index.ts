import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './data/repositories/types';

import rootReducer from './data/rootReducer';
import rootSaga from './data/rootSaga';
import { TaskState } from './data/task/types';

export interface ApplicationState {
  repositories: RepositoriesState
  task: TaskState
}
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
