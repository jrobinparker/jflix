import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Loading, Header, Card } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer({ slides }) {
  const [ profile, setProfile ] = useState({});
  const [ category, setCategory ] = useState('series');
  const [ loading, setLoading ] = useState(true);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ slideRows, setSlideRows ] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'jp',
    photoURL: '1'
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [user])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category])

  return user.displayName ? (
    <Fragment>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
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
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                 <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.Link>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link onClick={() => firebase.auth().signOut()}>
                      Sign Out
                    </Header.Link>
                  </Header.Group>
                  </Header.Dropdown>
              </Header.Profile>
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
      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.Subtitle>{item.title}</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <p>Feature</p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </Fragment>
  ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}
