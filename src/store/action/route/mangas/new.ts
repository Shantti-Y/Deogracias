import { createAction } from 'redux-actions';

export const FETCH_TAGS = 'route/mangas/new/FETCH_TAGS';
export const fetchTags = createAction(FETCH_TAGS);

// for calling reducers
export const SET_TAGS = 'route/mangas/new/SET_TAGS';
export const setTags = createAction(SET_TAGS);