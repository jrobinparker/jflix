import React, { Fragment, useState, useContext } from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer() {
  const [ profile, setProfile ] = useState({});
  const [ category, setCategory ] = useState('series');
  const [ loading, setLoading ] = useState(false);
  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'jp',
    photoURL: '1'
  }

  return user.displayName ? (
    <Fragment>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </Fragment>
  ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}
