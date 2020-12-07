import React, { Fragment } from 'react';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';

export default function Home() {
  return (
    <Fragment>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  )
}
