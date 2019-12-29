import { all } from 'redux-saga/effects';

import appStatusSaga from '@appSaga/util/appStatus';
import filterSaga from '@appSaga/util/filter';
import viewerSaga from '@appSaga/util/viewer';

export default function* saga() {
	yield all([
		...appStatusSaga(),
		...filterSaga(),
		...viewerSaga()
	]);
}