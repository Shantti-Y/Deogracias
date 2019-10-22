import { put, all, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  FETCH_MANGAS,
  setMangas
} from '@action/entity/manga';

// APIs
async function* invokeFetchMangas(action) {
  const records = await appDB[TableName.Mangas].toArray();
  yield put(setMangas(records));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(FETCH_MANGAS, invokeFetchMangas);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}