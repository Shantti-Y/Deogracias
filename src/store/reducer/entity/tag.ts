import { handleActions } from 'redux-actions';

import * as actions from '@action/entity/tag';

interface TagState {
  tags: TagEntity[],
  selectedTagId?: number
}
const initialState: TagState = {
  tags: [],
  selectedTagId: undefined
};

const functions = {
  setTags: (state: TagState, payload: { tags: TagEntity[] }): TagState => ({
    ...state,
    tags: payload.tags
  }),
  setSelectedTagId: (state: TagState, payload: { tagId: number }): TagState => ({
    ...state,
    selectedTagId: payload.tagId
  }),

};

export default handleActions({
  [actions.SET_TAGS]: (state: TagState, action) => functions.setTags(state, action.payload),
  [actions.SET_SELECTED_TAG_ID]: (state: TagState, action) => functions.setSelectedTagId(state, action.payload)
}, initialState);