/**
 *
 * PageDetail
 *
 */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Actors from '../../components/Actors';
import BannerMovies from '../../components/BannerMovies';
import DescBar from '../../components/DescBar';
import Navbar from '../../components/Navbar';
import { makeSelectListMovies } from '../HomePage/selectors';
import { makeSelectListActor } from './selectors';
import { getListActor } from './actions';
import reducer from './reducer';
import saga from './saga';
export function PageDetail({ listMovies, triggerFetchListActor, listActor }) {
  useInjectReducer({ key: 'pageDetail', reducer });
  useInjectSaga({ key: 'pageDetail', saga });

  const param = useParams();
  const [detailMovies, setDetailMovies] = useState({});

  useEffect(() => {
    const movies = listMovies.find(item => String(item.id) === param.id);
    setDetailMovies(movies);
    triggerFetchListActor();
  }, []);

  return (
    <div>
      <Navbar detailMovies={detailMovies} />
      <BannerMovies detailMovies={detailMovies} />
      <DescBar />
      <Actors listActor={listActor} />
    </div>
  );
}

PageDetail.propTypes = {
  listMovies: PropTypes.array,
  triggerFetchListActor: PropTypes.func,
  listActor: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  listMovies: makeSelectListMovies(),
  listActor: makeSelectListActor(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerFetchListActor: () => dispatch(getListActor()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PageDetail);
