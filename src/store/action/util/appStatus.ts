import { createAction } from 'redux-actions';

export const SET_NONE = 'util/appStatus/SET_NONE';
export const setNone = createAction(SET_NONE);

export const SET_SUCCESS = 'util/appStatus/SET_SUCCESS';
export const setSuccess = createAction(SET_SUCCESS);

export const SET_DANGER = 'util/appStatus/SET_DANGER';
export const setDanger = createAction(SET_DANGER);

// for calling reducers
export const SET_STATUS = 'util/appStatus/SET_STATUS';
export const setStatus = createAction(SET_STATUS);