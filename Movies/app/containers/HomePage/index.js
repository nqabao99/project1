/* eslint-disable no-shadow */
/**
 *
 * HomePage
 *
 */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Banner from '../../components/Banner';
import ListMovies from '../../components/ListMovies';
import Search from '../../components/Search';
import { getIdMovies } from '../App/actions';
import { getMovies, resetListMovies, searchMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectListMovies,
  makeSelectListSearchMovies,
  makeSelectSearchText,
  makeSelectStatusFlags,
} from './selectors';

export function HomePage({
  triggerFetchListMovies,
  statusFlag,
  listMovies,
  listSearchMovies,
  searchText,
  getIdMovie,
  resetListMovies,
  triggerSearchMovies,
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });
  const [page, setPage] = useState(1);

  useEffect(() => {
    resetListMovies();
  }, []);

  useEffect(() => {
    triggerFetchListMovies(page);
  }, [page]);

  const handlePageClick = () => {
    setPage(page + 1);
    triggerSearchMovies(searchText, page + 1);
  };

  const handleSearchMoviesChange = e => {
    triggerSearchMovies(e, 1);
  };

  return (
    <>
      <Banner />
      <Search handleSearchMoviesChange={handleSearchMoviesChange} />
      <ListMovies
        getIdMovies={getIdMovie}
        statusFlag={statusFlag}
        searchText={searchText}
        listMovies={searchText.length === 0 ? listMovies : listSearchMovies}
        handlePageClick={handlePageClick}
      />
    </>
  );
}

HomePage.propTypes = {
  listMovies: PropTypes.array,
  statusFlag: PropTypes.object,
  triggerFetchListMovies: PropTypes.func,
  listSearchMovies: PropTypes.array,
  searchText: PropTypes.string,
  getIdMovie: PropTypes.func,
  resetListMovies: PropTypes.func,
  triggerSearchMovies: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  statusFlag: makeSelectStatusFlags(),
  listMovies: makeSelectListMovies(),
  listSearchMovies: makeSelectListSearchMovies(),
  searchText: makeSelectSearchText(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerFetchListMovies: page => dispatch(getMovies(page)),
    getIdMovie: id => dispatch(getIdMovies(id)),
    resetListMovies: () => dispatch(resetListMovies()),
    triggerSearchMovies: (keyword, page) =>
      dispatch(searchMovies(keyword, page)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
