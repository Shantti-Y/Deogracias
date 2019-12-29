import { combineReducers } from 'redux';

import manga from '@appReducer/entity/manga';
import tag from '@appReducer/entity/tag';

const reducer = combineReducers({
	manga,
	tag
});

export default reducer;