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
import { getMovies, searchMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectListMovies,
  makeSelectSearchText,
  makeSelectStatusFlags,
} from './selectors';

export function HomePage({
  triggerFetchListMovies,
  statusFlag,
  listMovies,
  searchText,
  triggerSearchMovies,
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);

  useEffect(() => {
    if (searchText.length === 0) {
      triggerFetchListMovies(page);
    }
    triggerSearchMovies(searchText, pageSearch);
  }, [page, pageSearch]);

  const handlePageClick = () => {
    if (searchText.length === 0) {
      setPage(page + 1);
    } else {
      setPageSearch(pageSearch + 1);
    }
  };

  const handleSearchMoviesChange = e => {
    if (e.length === 0) {
      triggerFetchListMovies(1);
    }
    triggerSearchMovies(e, pageSearch);
  };

  return (
    <>
      <Banner />
      <Search
        searchText={searchText}
        handleSearchMoviesChange={handleSearchMoviesChange}
      />
      <ListMovies
        statusFlag={statusFlag}
        searchText={searchText}
        listMovies={listMovies}
        handlePageClick={handlePageClick}
      />
    </>
  );
}

HomePage.propTypes = {
  listMovies: PropTypes.array,
  statusFlag: PropTypes.object,
  triggerFetchListMovies: PropTypes.func,
  searchText: PropTypes.string,
  triggerSearchMovies: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  statusFlag: makeSelectStatusFlags(),
  listMovies: makeSelectListMovies(),
  searchText: makeSelectSearchText(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerFetchListMovies: page => dispatch(getMovies(page)),
    triggerSearchMovies: (keyword, page) =>
      dispatch(searchMovies(keyword, page)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
