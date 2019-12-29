import { combineReducers } from 'redux';

import appStatus from '@appReducer/util/appStatus';
import filter from '@appReducer/util/filter';
import viewer from '@appReducer/util/viewer';

const reducer = combineReducers({
	appStatus,
	filter,
	viewer
});

export default reducer;