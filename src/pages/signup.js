import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components/';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const isValid = !firstName || !lastName || !emailAddress || !password

  const handleSignUp = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
        .updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
      )
      .then(() => {
        setEmailAddress('')
        setPassword('')
        setError('')
        history.push(ROUTES.BROWSE)
      })
      .catch(error => setError(error.message))
  }

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Last Name'
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              autoComplete={false}
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isValid}
              type='submit'
            >
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  )
}
