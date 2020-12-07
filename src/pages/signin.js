import React, { useState } from 'react';
import { Form } from '../components/';
import HeaderContainer from '../containers/header';

export default function SignIn() {
  const [ error, setError ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignIn = e => {
    e.preventDefault()
  }

  return (
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
            disabled={false}
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
  )
}
