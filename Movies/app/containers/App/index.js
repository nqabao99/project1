import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Header from '../../components/Header';
import HomePage from '../HomePage';
import PageDetail from '../PageDetail';
function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={PageDetail} />
      </Switch>
    </>
  );
}

App.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
