import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import _get from 'lodash/get';
// Individual exports for testing
import {
  getMoviesSuccess,
  getMoviesFailed,
  searchMoviesSuccess,
  searchMoviesFailed,
} from './actions';
import { GET_MOVIES, SEARCH_MOVIES } from './constants';
function fetchMovies(page) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${page}`,
  });
}

function fetchSearchMovies(keyword, page) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&query=${keyword.toLowerCase()}&page=${page}`,
  });
}

function* callApiMovies({ page }) {
  try {
    const response = yield call(fetchMovies, page);
    const data = _get(response, 'data', []);
    if (response.status === 200) {
      yield put(getMoviesSuccess(data, page));
    } else {
      yield put(getMoviesFailed(response));
    }
  } catch (error) {
    yield put(getMoviesFailed(error));
  }
}

function* callApiSearchMovies({ keyword, page }) {
  try {
    const response = yield call(fetchSearchMovies, keyword, page);
    const data = _get(response, 'data', []);
    if (response.status === 200) {
      yield put(searchMoviesSuccess(data, page));
    } else {
      yield put(searchMoviesFailed(response));
    }
  } catch (error) {
    yield put(searchMoviesFailed(error));
  }
}

export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_MOVIES, callApiMovies);
  yield takeLatest(SEARCH_MOVIES, callApiSearchMovies);
}
