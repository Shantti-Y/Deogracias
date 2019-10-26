import { put, all, takeLatest, call} from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  fetchMangas,
  fetchMangasType,
  createManga,
  createMangaType,
  updateManga,
  updateMangaType,
  deleteManga,
  deleteMangaType,
  changeSelectedMangaId,
  changeSelectedMangaIdType,

  fetchAllMangas,
  fetchAllMangasType,
  fetchMangasByWord,
  fetchMangasByWordType,
  fetchMangaById,
  fetchMangaByIdType,
  fetchMangasByTagId,
  fetchMangasByTagIdType,
  setMangas,
  setSelectedMangaId
} from '@action/entity/manga';

import {
  setSuccess
} from '@action/util/appStatus';

// APIs
function* invokeFetchAllMangas(action: fetchAllMangasType){
  const mangas = yield call(() => appDB[TableName.Mangas].toArray());
  yield put(setMangas.action(mangas));
}

function* invokeFetchMangasByWord(action: fetchMangasByWordType) {
  const { word } = action.payload;
  const mangas = yield call(() => {
    return appDB[TableName.Mangas]
      .where("name")
      .anyOfIgnoreCase(word)
      .toArray();
  });
  yield put(setMangas.action(mangas));
}

function* invokeFetchMangaById(action: fetchMangaByIdType) {
  const { mangaId } = action.payload;
  const mangas = yield call(() => {
    appDB[TableName.Mangas]
      .where("id")
      .equals(mangaId)
      .toArray();
  });
  yield put(setMangas.action(mangas));
}

function* invokeFetchMangasByTagId(action: fetchMangasByTagIdType) {
  const { tagId } = action.payload;
  const mangas = yield call(() => {
    appDB[TableName.Mangas]
      .where("tagIds")
      .equals(tagId)
      .toArray();
  });
  yield put(setMangas.action(mangas));
}

function* invokeFetchMangas(action) {
  const mangas = yield call(() => appDB[TableName.Mangas].toArray());
  yield put(setMangas.action(mangas));
}
// TODO: Add catch handler if some kinds of db transaction error happens.
function* invokeCreateManga(action: createMangaType) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].add(manga));
  yield put(fetchMangas.action());
  yield put(setSuccess());
}
function* invokeUpdateManga(action: updateMangaType) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].update(manga.id!!, manga));
  yield put(fetchMangas.action());
  yield put(setSuccess());
}
function* invokeDeleteManga(action: deleteMangaType) {
  const { mangaId } = action.payload;
  yield call(() => appDB[TableName.Mangas].delete(mangaId));
  yield put(fetchMangas.action());
  yield put(setSuccess());
}
function* invokeChangeSelectedMangaId(action) {
  const mangaId = action.mangaId;
  yield put(setSelectedMangaId.action(mangaId));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(fetchAllMangas.name, invokeFetchAllMangas);
  yield takeLatest(fetchMangasByWord.name, invokeFetchMangasByWord);
  yield takeLatest(fetchMangaById.name, invokeFetchMangaById);
  yield takeLatest(fetchMangasByTagId.name, invokeFetchMangasByTagId);
  yield takeLatest(fetchMangas.name, invokeFetchMangas);
  yield takeLatest(createManga.name, invokeCreateManga);
  yield takeLatest(updateManga.name, invokeUpdateManga);
  yield takeLatest(deleteManga.name, invokeDeleteManga);
  yield takeLatest(changeSelectedMangaId.name, invokeChangeSelectedMangaId);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}