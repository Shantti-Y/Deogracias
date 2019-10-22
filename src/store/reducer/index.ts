import { combineReducers } from 'redux';

import entityManga from '@reducer/entity/manga';
import entityTag from '@reducer/entity/tag';

const reducer = combineReducers({
  entityManga,
  entityTag
});

export default reducer;