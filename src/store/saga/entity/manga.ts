import { put, all, takeLatest, call} from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  FETCH_MANGAS,
  CREATE_MANGA,
  UPDATE_MANGA,
  DELETE_MANGA,
  fetchMangas,
  setMangas,
  CHANGE_SELECTED_MANGA_ID,
  setSelectedMangaId
} from '@action/entity/manga';

import {
  setSuccess
} from '@action/util/appStatus';

// APIs
function* invokeFetchMangas(action) {
  const mangas = yield call(() => appDB[TableName.Mangas].toArray());
  yield put(setMangas({ mangas }));
}
// TODO: Add catch handler if some kinds of db transaction error happens.
function* invokeCreateManga(action) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].add(manga));
  yield put(fetchMangas());
  yield put(setSuccess());
}
function* invokeUpdateManga(action) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].update(manga.id, manga));
  yield put(fetchMangas());
  yield put(setSuccess());
}
function* invokeDeleteManga(action) {
  const { mangaId } = action.payload;
  yield call(() => appDB[TableName.Mangas].delete(mangaId));
  yield put(fetchMangas());
  yield put(setSuccess());
}
function* invokeChangeSelectedMangaId(action) {
  const mangaId = action.mangaId;
  yield put(setSelectedMangaId({ mangaId }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(FETCH_MANGAS, invokeFetchMangas);
  yield takeLatest(CREATE_MANGA, invokeCreateManga);
  yield takeLatest(UPDATE_MANGA, invokeUpdateManga);
  yield takeLatest(DELETE_MANGA, invokeDeleteManga);
  yield takeLatest(CHANGE_SELECTED_MANGA_ID, invokeChangeSelectedMangaId);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}