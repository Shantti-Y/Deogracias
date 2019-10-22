import { put, all, takeLatest } from 'redux-saga/effects';

import {
  SET_NONE,
  SET_SUCCESS,
  SET_DANGER,
  setNone,
  setStatus
} from '@action/util/appStatus';

import AppStatus from '@util/appStatus';

// APIs
function* invokeSetNone(action) {
  yield put(setStatus(AppStatus.NONE));
};

function* invokeSetSuccess(action) {
  yield put(setStatus(AppStatus.SUCCESS));
  yield put(setNone());
};
function* invokeSetDanger(action) {
  yield put(setStatus(AppStatus.DANGER));
  yield put(setNone());
};

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(SET_NONE, invokeSetNone);
  yield takeLatest(SET_SUCCESS, invokeSetSuccess);
  yield takeLatest(SET_DANGER, invokeSetDanger);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}