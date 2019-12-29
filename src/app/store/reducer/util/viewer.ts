import { handleActions } from 'redux-actions';

import { setCurrentPageIdx } from '@appAction/util/viewer';

interface State {
  currentPageIdx: number
}
const initialState: State = { currentPageIdx: 0 };

const functions = {
	setCurrentPageIdx: (state: State, payload: { pageIdx: number }): State => ({
		...state,
		currentPageIdx: payload.pageIdx
	})
};

export default handleActions({ [setCurrentPageIdx.name]: (state: State, action) => functions.setCurrentPageIdx(state, action.payload) }, initialState);