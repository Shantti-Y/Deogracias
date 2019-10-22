import { combineReducers } from 'redux';

import manga from '@reducer/entity/manga';
import tag from '@reducer/entity/tag';

const reducer = combineReducers({
  manga,
  tag
});

export default reducer;