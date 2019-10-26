import { put, all, takeLatest } from 'redux-saga/effects';

import {
  setBasicStatus,
  setBasicStatusType,
  setSuccessStatus,
  setSuccessStatusType,
  setWarningStatus,
  setWarningStatusType,
  setDangerStatus,
  setDangerStatusType,
  setStatus
} from '@action/util/appStatus';

import { 
  basicStatus
} from '@util/appStatus';

// APIs
function* invokeSetBasicStatus(action: setBasicStatusType) {
  const { status } = action.payload
  yield put(setStatus.action(status));
};

function* invokeSetSuccessStatus(action: setSuccessStatusType) {
  const { status } = action.payload
  yield put(setStatus.action(status));
  yield put(setStatus.action(basicStatus.NONE));
};
function* invokeSetWarningStatus(action: setWarningStatusType) {
  const { status } = action.payload
  yield put(setStatus.action(status));
  yield put(setStatus.action(basicStatus.NONE));
};
function* invokeSetDangerStatus(action: setDangerStatusType) {
  const { status } = action.payload
  yield put(setStatus.action(status));
  yield put(setStatus.action(basicStatus.NONE));
};

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(setBasicStatus.name, invokeSetBasicStatus);
  yield takeLatest(setSuccessStatus.name, invokeSetSuccessStatus);
  yield takeLatest(setWarningStatus.name, invokeSetWarningStatus);
  yield takeLatest(setDangerStatus.name, invokeSetDangerStatus);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}