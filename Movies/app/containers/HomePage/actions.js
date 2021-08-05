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
} from './constants';

export function getMovies(page) {
  return {
    type: GET_MOVIES,
    page,
  };
}

export function getMoviesSuccess(payload, page) {
  return {
    type: GET_MOVIES_SUCCESS,
    payload,
    page,
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

export function searchMoviesSuccess(payload, page) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload,
    page,
  };
}

export function searchMoviesFailed(message = '') {
  return {
    type: SEARCH_MOVIES_FAILED,
    message,
  };
}
