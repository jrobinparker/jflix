import React, { Fragment } from 'react';
import { OptForm } from '../components';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';

export default function Home() {
  return (
    <Fragment>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Try it Now</OptForm.Button>
          <OptForm.Text>Ready to watch? Enter your email address to create or restart your membership.</OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  )
}
