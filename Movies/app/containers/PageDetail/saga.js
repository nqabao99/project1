import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import _get from 'lodash/get';
import { GET_LIST_ACTOR } from './constants';
import { getListActorSuccess, getListActorFailed } from './actions';
function fetchActor() {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/602223/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`,
  });
}

function* callApiActor() {
  try {
    const response = yield call(fetchActor);

    const data = _get(response, 'data.cast', []);

    if (response.status === 200) {
      yield put(getListActorSuccess(data));
    } else {
      yield put(getListActorFailed(response));
    }
  } catch (error) {
    yield put(getListActorFailed(error));
  }
}
// Individual exports for testing
export default function* pageDetailSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_LIST_ACTOR, callApiActor);
}
