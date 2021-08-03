/*
 *
 * PageDetail actions
 *
 */

import {
  GET_LIST_ACTOR,
  GET_LIST_ACTOR_SUCCESS,
  GET_LIST_ACTOR_FAILED,
} from './constants';

export function getListActor() {
  return {
    type: GET_LIST_ACTOR,
  };
}
export function getListActorSuccess(payload) {
  return {
    type: GET_LIST_ACTOR_SUCCESS,
    payload,
  };
}

export function getListActorFailed(message) {
  return {
    type: GET_LIST_ACTOR_FAILED,
    message,
  };
}
