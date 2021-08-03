/*
 *
 * HomePage actions
 *
 */

import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILED,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED,
  RESET_LIST_MOVIES,
} from './constants';

export function getMovies(page) {
  return {
    type: GET_MOVIES,
    page,
  };
}

export function getMoviesSuccess(payload) {
  return {
    type: GET_MOVIES_SUCCESS,
    payload,
  };
}

export function getMoviesFailed(message = '') {
  return {
    type: GET_MOVIES_FAILED,
    message,
  };
}

export function searchMovies(keyword, page) {
  return {
    type: SEARCH_MOVIES,
    keyword,
    page,
  };
}

export function searchMoviesSuccess(payload) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload,
  };
}

export function searchMoviesFailed(message = '') {
  return {
    type: SEARCH_MOVIES_FAILED,
    message,
  };
}

export function resetListMovies() {
  return {
    type: RESET_LIST_MOVIES,
  };
}
