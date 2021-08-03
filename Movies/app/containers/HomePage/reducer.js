/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILED,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED,
  RESET_LIST_MOVIES,
} from './constants';

export const initialState = {
  movies: {},
  listMovies: [],
  listSearchMovies: [],
  searchText: '',
  statusFlags: {
    isLoading: false,
  },
  log: {
    error: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOVIES:
        draft.statusFlags.isLoading = true;
        break;

      case GET_MOVIES_SUCCESS:
        draft.statusFlags.isLoading = false;
        draft.movies = action.payload;
        draft.listMovies = state.listMovies.concat(action.payload.results);
        break;

      case GET_MOVIES_FAILED:
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;

      case SEARCH_MOVIES:
        draft.statusFlags.isLoading = true;
        draft.searchText = action.keyword;
        break;

      case SEARCH_MOVIES_SUCCESS:
        draft.statusFlags.isLoading = false;
        draft.listSearchMovies = state.listSearchMovies.concat(
          action.payload.results,
        );
        break;

      case SEARCH_MOVIES_FAILED:
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;

      case RESET_LIST_MOVIES:
        draft.statusFlags.isLoading = false;
        draft.movies = [];
        draft.listMovies = [];
        break;
    }
  });

export default homePageReducer;
