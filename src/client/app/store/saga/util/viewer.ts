import { all, put, takeLatest } from 'redux-saga/effects';

import {
	changeCurrentPageIdx,
	changeCurrentPageIdxType,
	setCurrentPageIdx
} from '@appAction/util/viewer';

// APIs
function* invokeChangeCurrentPageIdx(action: changeCurrentPageIdxType) {
	const { pageIdx } = action.payload;
	yield put(setCurrentPageIdx.action(pageIdx));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
	yield takeLatest(changeCurrentPageIdx.name, invokeChangeCurrentPageIdx);
}

export default function* saga() {
	yield all([watchAsyncTriggers()]);
}