import { combineReducers } from 'redux';

import appStatus from '@reducer/util/appStatus';

const reducer = combineReducers({
  appStatus
});

export default reducer;