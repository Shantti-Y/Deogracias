import { all } from 'redux-saga/effects';

import mangaSaga from '@saga/entity/manga';
import tagSaga from '@saga/entity/tag';

export default function* saga() {
  yield all([
    ...mangaSaga(),
    ...tagSaga()
  ]);
}