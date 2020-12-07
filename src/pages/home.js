import React, { Fragment } from 'react';
import { OptForm, FeatureContainer } from '../components';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';

export default function Home() {
  return (
    <Fragment>
      <HeaderContainer>
      <FeatureContainer>
        <FeatureContainer.Title>Unlimited films, TV shows, and more.</FeatureContainer.Title>
        <FeatureContainer.Subtitle>Watch anywhere, cancel anytime.</FeatureContainer.Subtitle>
        <OptForm>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email address to create or restart your membership.</OptForm.Text>
        </OptForm>
      </FeatureContainer>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  )
}
