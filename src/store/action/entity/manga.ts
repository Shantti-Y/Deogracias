const FETCH_MANGA_BY_ID = 'entity/manga/FETCH_MANGA_BY_ID';
export const fetchMangaById: reduxAction<{ mangaId: number }> = {
  name: FETCH_MANGA_BY_ID,
  action: (mangaId: number) => ({ type: FETCH_MANGA_BY_ID, payload: { mangaId } })
};
export type fetchMangaByIdType = ReturnType<typeof fetchMangaById.action>;

const FETCH_ALL_MANGAS = 'entity/manga/FETCH_ALL_MANGAS'
export const fetchAllMangas: reduxAction<{}> = {
  name: FETCH_ALL_MANGAS,
  action: () => ({ type: FETCH_ALL_MANGAS, payload: {} })
};
export type fetchAllMangasType = ReturnType<typeof fetchAllMangas.action>;

const FETCH_MANGAS_BY_WORD = 'entity/manga/FETCH_MANGAS_BY_WORD'
export const fetchMangasByWord: reduxAction<{ word: string }> = {
  name: FETCH_MANGAS_BY_WORD,
  action: (word: string) => ({ type: FETCH_MANGAS_BY_WORD, payload: { word } })
};
export type fetchMangasByWordType = ReturnType<typeof fetchMangasByWord.action>;

const FETCH_MANGAS_BY_TAG_ID = 'entity/manga/FETCH_MANGAS_BY_TAG_ID';
export const fetchMangasByTagId: reduxAction<{ tagId: number }> = {
  name: FETCH_MANGAS_BY_TAG_ID,
  action: (tagId: number) => ({ type: FETCH_MANGAS_BY_TAG_ID, payload: { tagId } })
};
export type fetchMangasByTagIdType = ReturnType<typeof fetchMangasByTagId.action>;

const FETCH_MANGAS = 'entity/manga/FETCH_MANGAS';
export const fetchMangas: reduxAction<{}> = {
  name: FETCH_MANGAS,
  action: (tagId: number) => ({ type: FETCH_MANGAS, payload: { tagId } })
};
export type fetchMangasType = ReturnType<typeof fetchMangas.action>;

const CREATE_MANGA = 'entity/manga/CREATE_MANGA';
export const createManga: reduxAction<{ manga: MangaEntity }> = {
  name: CREATE_MANGA,
  action: (manga: MangaEntity) => ({ type: CREATE_MANGA, payload: { manga } })
};
export type createMangaType = ReturnType<typeof createManga.action>;

const UPDATE_MANGA = 'entity/manga/UPDATE_MANGA';
export const updateManga: reduxAction<{ manga: MangaEntity }> = {
  name: UPDATE_MANGA,
  action: (manga: MangaEntity) => ({ type: UPDATE_MANGA, payload: { manga } })
};
export type updateMangaType = ReturnType<typeof updateManga.action>;

const DELETE_MANGA = 'entity/manga/DELETE_MANGA';
export const deleteManga: reduxAction<{ mangaId: number}> = {
  name: DELETE_MANGA,
  action: (mangaId: number) => ({ type: DELETE_MANGA, payload: { mangaId } })
};
export type deleteMangaType = ReturnType<typeof deleteManga.action>;

const CHANGE_SELECTED_MANGA_ID = 'entity/manga/CHANGE_SELECTED_MANGA_ID';
export const changeSelectedMangaId: reduxAction<{ mangaId: number }> = {
  name: CHANGE_SELECTED_MANGA_ID,
  action: (mangaId: number) => ({ type: CHANGE_SELECTED_MANGA_ID, payload: { mangaId } })
};
export type changeSelectedMangaIdType = ReturnType<typeof changeSelectedMangaId.action>;

// for calling reducers
const SET_MANGAS = 'entity/manga/SET_MANGAS';
export const setMangas: reduxAction<{ mangas: MangaEntity[] }> = {
  name: SET_MANGAS,
  action: (mangas: MangaEntity[]) => ({ type: SET_MANGAS, payload: { mangas } })
};
export type setMangasType = ReturnType<typeof setMangas.action>;

// for calling reducers
const SET_SELECTED_MANGA_ID = 'entity/manga/SET_SELECTED_MANGA_ID';
export const setSelectedMangaId: reduxAction<{ mangaId: number }> = {
  name: SET_SELECTED_MANGA_ID,
  action: (mangaId: number) => ({ type: SET_SELECTED_MANGA_ID, payload: { mangaId } })
};
export type setSelectedMangaIdType = ReturnType<typeof setSelectedMangaId.action>;