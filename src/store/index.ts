import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '@reducer';
import rootSaga from '@saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;