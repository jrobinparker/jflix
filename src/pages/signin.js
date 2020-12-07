import React, { Fragment, useState } from 'react';
import { Form } from '../components/';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';

export default function SignIn() {
  const [ error, setError ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  const isValid = !emailAddress || !password

  const handleSignIn = (e, emailAddress, password) => {
    e.preventDefault()
    isValid(emailAddress, password)
  }

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder={emailAddress}
              value={({ target }) => setEmailAddress((target.value))}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder={password}
              value={({ target}) => setPassword(target.value)}
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
