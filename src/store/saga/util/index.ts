import { all } from 'redux-saga/effects';

import appStatusSaga from '@saga/util/appStatus';
import filterSaga from '@saga/util/filter';

export default function* saga() {
  yield all([
    ...appStatusSaga(),
    ...filterSaga()
  ]);
}