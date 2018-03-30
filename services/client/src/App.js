import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from 'pages/home';
import DeveloperListingPage from 'pages/developers';
import MeetupListingPage from 'pages/meetups';
import DeveloperPage from 'pages/developer';
import MeetupPage from 'pages/meetup';
import ErrorPage from 'pages/404';
import ProfilePage from 'pages/profile';
import AboutPage from 'pages/about';

import ScrollToTop from 'components/navigation/scroll-to-top';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path='/'
                render={props => <HomePage {...props} />}
              />
              <Route
                exact
                path='/developers'
                render={props => <DeveloperListingPage {...props} />}
              />
              <Route
                exact
                path='/meetups'
                render={props => <MeetupListingPage {...props} />}
              />
              <Route
                path='/meetup/:id'
                render={props => <MeetupPage {...props} {...props} />}
              />
              <Route
                path='/developer/:id'
                render={props => <DeveloperPage {...props} {...props} />}
              />
              <Route
                path='/profile'
                render={props => <ProfilePage {...props} />}
              />
              <Route
                exact
                path='/about'
                render={props => <AboutPage {...props} />}
              />
              <Route render={props => <ErrorPage {...props} />} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {
  const {isAuthenticated, errorMessage} = state.auth;

  return {isAuthenticated, errorMessage};
}

export default connect(mapStateToProps)(App);
