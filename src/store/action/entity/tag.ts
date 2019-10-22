import { createAction } from 'redux-actions';

export const FETCH_TAGS = 'entity/tag/FETCH_TAGS';
export const fetchTags = createAction(FETCH_TAGS);

// for calling reducers
export const SET_TAGS = 'entity/tag/SET_TAGS';
export const setTags = createAction(SET_TAGS);

// for calling reducers
export const SET_SELECTED_TAG_ID = 'entity/tag/SET_SELECTED_TAG_ID';
export const setSelectedTagId = createAction(SET_SELECTED_TAG_ID);