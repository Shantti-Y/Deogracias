import { createAction } from 'redux-actions';

export const FETCH_TAGS = 'entity/tag/FETCH_TAGS';
export const fetchTags = createAction(FETCH_TAGS);

export const CREATE_TAG = 'entity/tag/CREATE_TAG';
export const createTag = createAction(CREATE_TAG);

export const UPDATE_TAG = 'entity/tag/UPDATE_TAG';
export const updateTag = createAction(UPDATE_TAG);

export const DELETE_TAG = 'entity/manga/DELETE_TAG';
export const deleteTag = createAction(DELETE_TAG);

export const CHANGE_SELECTED_TAG_ID = 'entity/tag/CHANGE_SELECTED_TAG_ID';
export const changeSelectedTagId = createAction(CHANGE_SELECTED_TAG_ID);

// for calling reducers
export const SET_TAGS = 'entity/tag/SET_TAGS';
export const setTags = createAction(SET_TAGS);

// for calling reducers
export const SET_SELECTED_TAG_ID = 'entity/tag/SET_SELECTED_TAG_ID';
export const setSelectedTagId = createAction(SET_SELECTED_TAG_ID);