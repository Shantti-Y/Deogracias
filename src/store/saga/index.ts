import { all } from 'redux-saga/effects';

import entitySaga from '@saga/entity';
import utilSaga from '@saga/util';

export default function* saga() {
  yield all([
    ...entitySaga(),
    ...utilSaga()
  ]);
}