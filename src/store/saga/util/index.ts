import { all } from 'redux-saga/effects';

import appStatusSaga from '@saga/util/appStatus';

export default function* saga() {
  yield all([
    ...appStatusSaga()
  ]);
}