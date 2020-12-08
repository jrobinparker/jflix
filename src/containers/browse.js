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
  const [ searchTerm, setSearchTerm ] = useState('');
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
            <Header.Logo to={ROUTES.HOME} src='images/misc/logo.svg' alt='jflix-logo' />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Header.Group>
          </Header.Frame>
        <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </Fragment>
  ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}
