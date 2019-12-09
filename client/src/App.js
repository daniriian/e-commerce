/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const App = ({ currentUser, checkUserSession }) => {
  const unsuscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
    // return unsuscribeFromAuth();
  }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsuscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
