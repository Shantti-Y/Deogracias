import { all, call, put, takeLatest } from 'redux-saga/effects';

import { TableName, appDB } from '@appUtil/database';

import {
	createTag,
	createTagType,
	deleteTag,
	deleteTagType,
	fetchAllTags,
	fetchAllTagsType,
	fetchTagById,
	fetchTagByIdType,
	fetchTagsByIds,
	fetchTagsByIdsType,
	setSelectedTag,
	setTags,
	updateTag,
	updateTagType
} from '@appAction/entity/tag';

import {
	setDangerStatus,
	setSuccessStatus,
	setWarningStatus
} from '@appAction/util/appStatus';

import {
	dangerStatus,
	successStatus,
	warningStatus
} from '@appUtil/appStatus';

// APIs
function* invokeFetchAllTags(action: fetchAllTagsType) {
	const tags = yield call(() => appDB[TableName.Tags].toArray());
	yield put(setTags.action(tags));
}
function* invokeFetchTagById(action: fetchTagByIdType) {
	const { tagId } = action.payload;
	const tag = yield call(() => appDB[TableName.Tags].get({ id: tagId }));
	yield put(setSelectedTag.action(tag));
}
function* invokeFetchTagsByIds(action: fetchTagsByIdsType) {
	const { tagIds } = action.payload;
	const tags = yield call(() => appDB[TableName.Tags].where('id').anyOf(tagIds)
		.toArray());
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

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
	yield takeLatest(fetchAllTags.name, invokeFetchAllTags);
	yield takeLatest(fetchTagById.name, invokeFetchTagById);
	yield takeLatest(fetchTagsByIds.name, invokeFetchTagsByIds);
	yield takeLatest(createTag.name, invokeCreateTag);
	yield takeLatest(updateTag.name, invokeUpdateTag);
	yield takeLatest(deleteTag.name, invokeDeleteTag);
}

export default function* saga() {
	yield all([watchAsyncTriggers()]);
}