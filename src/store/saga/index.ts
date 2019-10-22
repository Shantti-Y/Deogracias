import { all } from 'redux-saga/effects';

import entityMangaSaga from '@saga/entity/manga';
import entityTagSaga from '@saga/entity/tag';

export default function* rootSaga() {
  yield all([
    ...entityMangaSaga(),
    ...entityTagSaga()
  ]);
}