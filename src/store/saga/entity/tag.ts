import { put, all, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  FETCH_TAGS,
  setTags
} from '@action/entity/tag';

// APIs
async function* invokeFetchTags(action) {
  const records = await appDB[TableName.Tags].toArray();
  yield put(setTags(records));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(FETCH_TAGS, invokeFetchTags);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}