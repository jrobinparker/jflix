import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components/';
import * as ROUTES from'../constants/routes';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [ error, setError ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  const isValid = !emailAddress || !password

  const handleSignIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
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
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress((target.value))}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isValid}
              type='submit'>
              Sign In
            </Form.Submit>
            <Form.Text>
              New to jflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  )
}
