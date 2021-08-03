/*
 *
 * PageDetail reducer
 *
 */
import produce from 'immer';
import {
  GET_LIST_ACTOR,
  GET_LIST_ACTOR_SUCCESS,
  GET_LIST_ACTOR_FAILED,
} from './constants';

export const initialState = {
  listActor: [],
  statusFlags: {
    isLoading: false,
  },
  log: {
    error: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const pageDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LIST_ACTOR:
        draft.statusFlags.isLoading = true;
        break;

      case GET_LIST_ACTOR_SUCCESS:
        draft.statusFlags.isLoading = false;
        draft.listActor = action.payload;
        break;

      case GET_LIST_ACTOR_FAILED:
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;
    }
  });

export default pageDetailReducer;
