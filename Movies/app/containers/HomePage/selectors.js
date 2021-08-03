import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const makeSelectMovies = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.movies,
  );

const makeSelectListMovies = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.listMovies,
  );

const makeSelectListSearchMovies = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.listSearchMovies,
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

export {
  makeSelectMovies,
  makeSelectStatusFlags,
  makeSelectListMovies,
  makeSelectListSearchMovies,
  makeSelectSearchText,
};
