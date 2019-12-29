import { all } from 'redux-saga/effects';

import mangaSaga from '@appSaga/entity/manga';
import tagSaga from '@appSaga/entity/tag';

export default function* saga() {
	yield all([
		...mangaSaga(),
		...tagSaga()
	]);
}