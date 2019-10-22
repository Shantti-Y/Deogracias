import { handleActions } from 'redux-actions';

import * as actions from '@action/util/appStatus';

import AppStatus from '@util/appStatus';

interface AppStatusState {
  status: AppStatus
}
const initialState: AppStatusState = {
  status: AppStatus.NONE
};

const functions = {
  setStatus: (state: AppStatusState, payload: { status: AppStatus }): AppStatusState => ({
    ...state,
    status: payload.status
  })
};

export default handleActions({
  [actions.SET_STATUS]: (state: AppStatusState, action) => functions.setStatus(state, action.payload)
}, initialState);