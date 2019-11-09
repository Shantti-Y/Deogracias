import { combineReducers } from 'redux';

import appStatus from '@appReducer/util/appStatus';
import filter from '@appReducer/util/filter';

const reducer = combineReducers({
  appStatus,
  filter
});

export default reducer;