import { put, all, call, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  fetchAllTags,
  fetchAllTagsType,
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
  setSuccessStatus,
  setWarningStatus,
  setDangerStatus
} from '@action/util/appStatus';

import {
  successStatus,
  warningStatus,
  dangerStatus
} from '@util/appStatus';

// APIs
function* invokeFetchAllTags(action: fetchAllTagsType) {
  const tags = yield call(() => appDB[TableName.Tags].toArray());
  yield put(setTags.action(tags));
}
function* invokeCreateTag(action: createTagType) {
  const { tag } = action.payload;
  yield call(() => appDB[TableName.Tags].add(tag));
  yield put(fetchAllTags.action());
  yield put(setSuccessStatus.action(successStatus.CREATED_TAG));
}
function* invokeUpdateTag(action: updateTagType) {
  const { tag } = action.payload;
  yield call(() => appDB[TableName.Tags].update(tag.id!!, tag));
  yield put(fetchAllTags.action());
  yield put(setSuccessStatus.action(successStatus.UPDATED_TAG));
}
function* invokeDeleteTag(action: deleteTagType) {
  const { tagId } = action.payload;
  yield call(() => appDB[TableName.Tags].delete(tagId));
  yield put(fetchAllTags.action());
  yield put(setWarningStatus.action(warningStatus.DELETED_TAG));
}
function* invokeChangeSelectedTagId(action: changeSelectedTagIdType) {
  const { tagId } = action.payload;
  yield put(setSelectedTagId.action(tagId));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(fetchAllTags.name, invokeFetchAllTags);
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