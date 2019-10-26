import { handleActions } from 'redux-actions';

import {
  setMangas,
  setSelectedManga
} from '@action/entity/manga';

interface MangaState {
  mangas: MangaEntity[],
  selectedManga?: MangaEntity
}
const initialState: MangaState = {
  mangas: [],
  selectedManga: undefined
};

const functions = {
  setMangas: (state: MangaState, payload: { mangas: MangaEntity[] }): MangaState => ({
    ...state,
    mangas: payload.mangas
  }),
  setSelectedManga: (state: MangaState, payload: { manga: MangaEntity }): MangaState => ({
    ...state,
    selectedManga: payload.manga
  }),

};

export default handleActions({
  [setMangas.name]: (state: MangaState, action) => functions.setMangas(state, action.payload),
  [setSelectedManga.name]: (state: MangaState, action) => functions.setSelectedManga(state, action.payload)
}, initialState);