import { put, all, call, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  FETCH_TAGS,
  CREATE_TAG,
  UPDATE_TAG,
  DELETE_TAG,
  fetchTags,
  setTags
} from '@action/entity/tag';

import {
  setSuccess
} from '@action/util/appStatus';

// APIs
function* invokeFetchTags(action) {
  const tags = yield call(() => appDB[TableName.Tags].toArray());
  yield put(setTags({ tags }));
}
function* invokeCreateTag(action) {
  const { tag } = action.payload;
  yield call(() => appDB[TableName.Tags].add(tag));
  yield put(fetchTags());
  yield put(setSuccess());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(FETCH_TAGS, invokeFetchTags);
  yield takeLatest(CREATE_TAG, invokeCreateTag);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}