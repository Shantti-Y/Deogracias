import { handleActions } from 'redux-actions';

import {
  setStatus
} from '@action/util/appStatus';

import { statusType, basicStatus } from '@util/appStatus';

interface AppStatusState {
  status: statusType
}
const initialState: AppStatusState = {
  status: basicStatus.NONE
};

const functions = {
  setStatus: (state: AppStatusState, payload: { status: statusType }): AppStatusState => ({
    ...state,
    status: payload.status
  })
};

export default handleActions({
  [setStatus.name]: (state: AppStatusState, action) => functions.setStatus(state, action.payload)
}, initialState);