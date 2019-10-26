const FETCH_TAG_BY_ID = 'entity/tag/FETCH_TAG_BY_ID'
export const fetchTagById: reduxAction<{ tagId: number }> = {
  name: FETCH_TAG_BY_ID,
  action: (tagId: number) => ({ type: FETCH_TAG_BY_ID, payload: { tagId } })
};
export type fetchTagByIdType = ReturnType<typeof fetchTagById.action>;

const FETCH_ALL_TAGS = 'entity/tag/FETCH_ALL_TAGS'
export const fetchAllTags: reduxAction<{}> = {
  name: FETCH_ALL_TAGS,
  action: () => ({ type: FETCH_ALL_TAGS, payload: {} })
};
export type fetchAllTagsType = ReturnType<typeof fetchAllTags.action>;

const FETCH_TAGS_BY_IDS = 'entity/tag/FETCH_TAGS_BY_IDS'
export const fetchTagsByIds: reduxAction<{ tagIds: number[] }> = {
  name: FETCH_TAGS_BY_IDS,
  action: (tagIds: number[]) => ({ type: FETCH_TAGS_BY_IDS, payload: { tagIds } })
};
export type fetchTagsByIdsType = ReturnType<typeof fetchTagsByIds.action>;

const FETCH_TAGS = 'entity/tag/FETCH_TAGS'
export const fetchTags: reduxAction<{}> = {
  name: FETCH_TAGS,
  action: () => ({ type: FETCH_TAG_BY_ID, payload: {} })
};
export type fetchTagsType = ReturnType<typeof fetchTags.action>;

const CREATE_TAG = 'entity/tag/CREATE_TAG'
export const createTag: reduxAction<{ tag: TagEntity}> = {
  name: CREATE_TAG,
  action: (tag: TagEntity) => ({ type: CREATE_TAG, payload: { tag} })
};
export type createTagType = ReturnType<typeof createTag.action>;

const UPDATE_TAG = 'entity/tag/UPDATE_TAG'
export const updateTag: reduxAction<{ tag: TagEntity }> = {
  name: UPDATE_TAG,
  action: (tag: TagEntity) => ({ type: UPDATE_TAG, payload: { tag } })
};
export type updateTagType = ReturnType<typeof updateTag.action>;

const DELETE_TAG = 'entity/tag/DELETE_TAG'
export const deleteTag: reduxAction<{ tagId: number }> = {
  name: DELETE_TAG,
  action: (tagId: number) => ({ type: DELETE_TAG, payload: { tagId } })
};
export type deleteTagType = ReturnType<typeof deleteTag.action>;

const CHANGE_SELECTED_TAG_ID = 'entity/tag/CHANGE_SELECTED_TAG_ID'
export const changeSelectedTagId: reduxAction<{ tagId: number }> = {
  name: DELETE_TAG,
  action: (tagId: number) => ({ type: CHANGE_SELECTED_TAG_ID, payload: { tagId } })
};
export type changeSelectedTagIdType = ReturnType<typeof changeSelectedTagId.action>;

// for calling reducers
const SET_TAGS = 'entity/tag/SET_TAGS'
export const setTags: reduxAction<{ tags: TagEntity[] }> = {
  name: SET_TAGS,
  action: (tags: TagEntity[]) => ({ type: SET_TAGS, payload: { tags } })
};
export type setTagsType = ReturnType<typeof fetchTagsByIds.action>;

// for calling reducers
const SET_SELECTED_TAG_ID = 'entity/tag/SET_SELECTED_TAG_ID'
export const setSelectedTagId: reduxAction<{ tagId: number }> = {
  name: SET_SELECTED_TAG_ID,
  action: (tagId: number) => ({ type: SET_SELECTED_TAG_ID, payload: { tagId } })
};
export type setSelectedTagIdType = ReturnType<typeof setSelectedTagId.action>;