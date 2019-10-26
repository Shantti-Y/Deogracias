import { put, all, call, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  fetchTags,
  fetchTagsType,
  createTag,
  createTagType,
  updateTag,
  updateTagType,
  deleteTag,
  deleteTagType,
  setTags,
  changeSelectedTagId,
  changeSelectedTagIdType,
  setSelectedTagId
} from '@action/entity/tag';

import {
  setSuccess
} from '@action/util/appStatus';

// APIs
function* invokeFetchTags(action: fetchTagsType) {
  const tags = yield call(() => appDB[TableName.Tags].toArray());
  yield put(setTags.action(tags));
}
function* invokeCreateTag(action: createTagType) {
  const { tag } = action.payload;
  yield call(() => appDB[TableName.Tags].add(tag));
  yield put(fetchTags.action());
  yield put(setSuccess());
}
function* invokeUpdateTag(action: updateTagType) {
  const { tag } = action.payload;
  yield call(() => appDB[TableName.Tags].update(tag.id!!, tag));
  yield put(fetchTags.action());
  yield put(setSuccess());
}
function* invokeDeleteTag(action: deleteTagType) {
  const { tagId } = action.payload;
  yield call(() => appDB[TableName.Tags].delete(tagId));
  yield put(fetchTags.action());
  yield put(setSuccess());
}
function* invokeChangeSelectedTagId(action: changeSelectedTagIdType) {
  const { tagId } = action.payload;
  yield put(setSelectedTagId.action(tagId));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(fetchTags.name, invokeFetchTags);
  yield takeLatest(createTag.name, invokeCreateTag);
  yield takeLatest(updateTag.name, invokeUpdateTag);
  yield takeLatest(deleteTag.name, invokeDeleteTag);
  yield takeLatest(changeSelectedTagId.name, invokeChangeSelectedTagId);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}