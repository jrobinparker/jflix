import React, { Fragment } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer() {
  const profile = {
    displayName: 'jp'
  }

  return profile.displayName ? (
    <Fragment>
      <p>Browse</p>
      <FooterContainer />
    </Fragment>
  ) : <SelectProfileContainer />
}
