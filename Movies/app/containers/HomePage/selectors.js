import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const makeSelectListMovies = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.listMovies,
  );

const makeSelectSearchText = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.searchText,
  );

const makeSelectStatusFlags = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.statusFlags,
  );

export { makeSelectStatusFlags, makeSelectListMovies, makeSelectSearchText };
