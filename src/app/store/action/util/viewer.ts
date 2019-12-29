const CHANGE_CURRENT_PAGE_IDX = 'util/viewer/CHANGE_CURRENT_PAGE_IDX';
export const changeCurrentPageIdx: reduxAction<{ pageIdx: number }> = {
	name: CHANGE_CURRENT_PAGE_IDX,
	action: (pageIdx: number) => ({ type: CHANGE_CURRENT_PAGE_IDX, payload: { pageIdx } })
};
export type changeCurrentPageIdxType = ReturnType<typeof changeCurrentPageIdx.action>;

// for calling reducers
const SET_CURRENT_PAGE_IDX = 'util/viewer/SET_CURRENT_PAGE_IDX';
export const setCurrentPageIdx: reduxAction<{ pageIdx: number }> = {
	name: SET_CURRENT_PAGE_IDX,
	action: (pageIdx: number) => ({ type: SET_CURRENT_PAGE_IDX, payload: { pageIdx } })
};
export type setCurrentPageIdxType = ReturnType<typeof setCurrentPageIdx.action>;