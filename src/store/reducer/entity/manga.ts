import { handleActions } from 'redux-actions';

import * as actions from '@action/entity/manga';

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
  [actions.SET_MANGAS]: (state: MangaState, action) => functions.setMangas(state, action.payload),
  [actions.SET_SELECTED_MANGA_ID]: (state: MangaState, action) => functions.setSelectedMangaId(state, action.payload)
}, initialState);