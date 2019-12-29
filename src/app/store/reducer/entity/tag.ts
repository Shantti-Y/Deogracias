import { handleActions } from 'redux-actions';

import {
	setSelectedTag,
	setTags
} from '@appAction/entity/tag';

interface TagState {
  tags: TagEntity[],
  selectedTag: TagEntity
}
const initialState: TagState = {
	tags: [],
	selectedTag: {
		id: undefined,
		name: ''
	}
};

const functions = {
	setTags: (state: TagState, payload: { tags: TagEntity[] }): TagState => ({
		...state,
		tags: payload.tags
	}),
	setSelectedTag: (state: TagState, payload: { tag: TagEntity }): TagState => ({
		...state,
		selectedTag: payload.tag
	})

};

export default handleActions({
	[setTags.name]: (state: TagState, action) => functions.setTags(state, action.payload),
	[setSelectedTag.name]: (state: TagState, action) => functions.setSelectedTag(state, action.payload)
}, initialState);