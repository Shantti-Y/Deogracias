import { combineReducers } from 'redux';

import appStatus from '@reducer/util/appStatus';
import filter from '@reducer/util/filter';

const reducer = combineReducers({
  appStatus,
  filter
});

export default reducer;