import { put, all, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  FETCH_TAGS,
  CREATE_TAG,
  UPDATE_TAG,
  DELETE_TAG,
  fetchTags,
  setTags
} from '@action/entity/tag';

// APIs
function* invokeFetchTags(action) {
  yield(appDB[TableName.Tags].toArray(result => put(setTags(result))));
}
function* invokeCreateTag(action) {
  const { tag } = action.payload;
  yield (appDB[TableName.Tags])
    .add(tag)
    .then(() => put(fetchTags()));
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