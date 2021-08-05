/**
 *
 * Search
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';
import Input from '../Input';

function Search({ handleSearchMoviesChange, searchText }) {
  return (
    <div>
      <Input
        onChange={e => handleSearchMoviesChange(e.target.value)}
        value={searchText}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

Search.propTypes = {
  handleSearchMoviesChange: PropTypes.func,
  searchText: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);
