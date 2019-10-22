import { combineReducers } from 'redux';

import entity from '@reducer/entity';
import util from '@reducer/util';

const reducer = combineReducers({
  entity,
  util
});

export default reducer;