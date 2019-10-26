import { handleActions } from 'redux-actions';

import {
  setMangas,
  setSelectedMangaId
} from '@action/entity/manga';

interface MangaState {
  mangas: MangaEntity[],
  selectedMangaId?: number
}
const initialState: MangaState = {
  mangas: [],
  selectedMangaId: undefined
};

const functions = {
  setMangas: (state: MangaState, payload: { mangas: MangaEntity[] }): MangaState => ({
    ...state,
    mangas: payload.mangas
  }),
  setSelectedMangaId: (state: MangaState, payload: { mangaId: number }): MangaState => ({
    ...state,
    selectedMangaId: payload.mangaId
  }),

};

export default handleActions({
  [setMangas.name]: (state: MangaState, action) => functions.setMangas(state, action.payload),
  [setSelectedMangaId.name]: (state: MangaState, action) => functions.setSelectedMangaId(state, action.payload)
}, initialState);