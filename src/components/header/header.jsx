/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="option"
            role="link"
            onClick={() => {
              console.log('Sign out');
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
        <CartDropdown />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
