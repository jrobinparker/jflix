import React, { Fragment, useState } from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer() {
  const [ profile, setProfile ] = useState({});

  const user = {
    displayName: 'jp',
    photoURL: '1'
  }

  return !user.displayName ? (
    <Fragment>
      <p>Browse</p>
      <FooterContainer />
    </Fragment>
  ) : <SelectProfileContainer user={user} setProfile={setProfile} />
}
