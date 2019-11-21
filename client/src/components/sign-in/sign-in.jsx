/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import './sign-in.scss';

import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I allready have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
