import { createAction } from 'redux-actions';

export const FETCH_MANGAS = 'entity/manga/FETCH_MANGAS';
export const fetchMangas = createAction(FETCH_MANGAS);

// for calling reducers
export const SET_MANGAS = 'entity/manga/SET_MANGAS';
export const setMangas = createAction(SET_MANGAS);

// for calling reducers
export const SET_SELECTED_MANGA_ID = 'entity/manga/SET_SELECTED_MANGA_ID';
export const setSelectedMangaId = createAction(SET_SELECTED_MANGA_ID);