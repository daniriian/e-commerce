/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
