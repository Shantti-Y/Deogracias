import { put, all, takeLatest, call} from 'redux-saga/effects';

import { TableName, appDB } from '@util/database';

import {
  createManga,
  createMangaType,
  updateManga,
  updateMangaType,
  deleteManga,
  deleteMangaType,
  fetchAllMangas,
  fetchAllMangasType,
  fetchMangasByWord,
  fetchMangasByWordType,
  fetchMangaById,
  fetchMangaByIdType,
  fetchMangasByTagId,
  fetchMangasByTagIdType,
  setMangas,
  setSelectedManga
} from '@action/entity/manga';

import {
  setSuccessStatus,
  setWarningStatus,
  setDangerStatus
} from '@action/util/appStatus';

import {
  successStatus,
  warningStatus,
  dangerStatus
} from '@util/appStatus';

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
      .startsWithIgnoreCase(word)
      .toArray();
  });
  yield put(setMangas.action(mangas));
}

function* invokeFetchMangaById(action: fetchMangaByIdType) {
  const { mangaId } = action.payload;
  const manga = yield call(() => {
    return appDB[TableName.Mangas].get({ id: mangaId })
  });
  yield put(setSelectedManga.action(manga));
}

function* invokeFetchMangasByTagId(action: fetchMangasByTagIdType) {
  const { tagId } = action.payload;
  const mangas = yield call(() => {
    return appDB[TableName.Mangas]
      .where({ tagIds: tagId })
      .toArray();
  });
  yield put(setMangas.action(mangas));
}

// TODO: Add catch handler if some kinds of db transaction error happens.
function* invokeCreateManga(action: createMangaType) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].add(manga));
  yield put(fetchAllMangas.action());
  yield put(setSuccessStatus.action(successStatus.CREATED_MANGA));
}
function* invokeUpdateManga(action: updateMangaType) {
  const { manga } = action.payload;
  yield call(() => appDB[TableName.Mangas].update(manga.id!!, manga));
  yield put(fetchAllMangas.action());
  yield put(setWarningStatus.action(successStatus.UPDATED_MANGA));
}
function* invokeDeleteManga(action: deleteMangaType) {
  const { mangaId } = action.payload;
  yield call(() => appDB[TableName.Mangas].delete(mangaId));
  yield put(fetchAllMangas.action());
  yield put(setDangerStatus.action(warningStatus.DELETED_MANGA));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(fetchAllMangas.name, invokeFetchAllMangas);
  yield takeLatest(fetchMangasByWord.name, invokeFetchMangasByWord);
  yield takeLatest(fetchMangaById.name, invokeFetchMangaById);
  yield takeLatest(fetchMangasByTagId.name, invokeFetchMangasByTagId);
  yield takeLatest(createManga.name, invokeCreateManga);
  yield takeLatest(updateManga.name, invokeUpdateManga);
  yield takeLatest(deleteManga.name, invokeDeleteManga);
}

export default function* saga() {
  yield all([
    watchAsyncTriggers()
  ]);
}