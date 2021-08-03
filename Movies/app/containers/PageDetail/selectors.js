import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageDetail state domain
 */

const selectPageDetailDomain = state => state.pageDetail || initialState;

const makeSelectListActor = () =>
  createSelector(
    selectPageDetailDomain,
    substate => substate.listActor,
  );

export { makeSelectListActor };
