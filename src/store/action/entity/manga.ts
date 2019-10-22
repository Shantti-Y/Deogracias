import { createAction } from 'redux-actions';

export const FETCH_MANGAS = 'entity/manga/FETCH_MANGAS';
export const fetchMangas = createAction(FETCH_MANGAS);

export const CREATE_MANGA = 'entity/manga/CREATE_MANGA';
export const createManga = createAction(CREATE_MANGA);

export const UPDATE_MANGA = 'entity/manga/UPDATE_MANGA';
export const updateManga = createAction(UPDATE_MANGA);

export const DELETE_MANGA = 'entity/manga/DELETE_MANGA';
export const deleteManga = createAction(DELETE_MANGA);

export const CHANGE_SELECTED_MANGA_ID = 'entity/manga/CHANGE_SELECTED_MANGA_ID';
export const changeSelectedMangaId = createAction(CHANGE_SELECTED_MANGA_ID);

// for calling reducers
export const SET_MANGAS = 'entity/manga/SET_MANGAS';
export const setMangas = createAction(SET_MANGAS);

// for calling reducers
export const SET_SELECTED_MANGA_ID = 'entity/manga/SET_SELECTED_MANGA_ID';
export const setSelectedMangaId = createAction(SET_SELECTED_MANGA_ID);