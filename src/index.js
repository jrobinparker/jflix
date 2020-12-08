import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';

import { seedDatabase } from './seed';

const config = {
    apiKey: "AIzaSyBlfjAN-dZHOW5EDVb_xl2i-OJas-TkmMU",
    authDomain: "jflix-ac3e6.firebaseapp.com",
    databaseURL: "https://jflix-ac3e6-default-rtdb.firebaseio.com",
    projectId: "jflix-ac3e6",
    storageBucket: "jflix-ac3e6.appspot.com",
    messagingSenderId: "1078215977643",
    appId: "1:1078215977643:web:073382fd204531f5cb65ee",
    measurementId: "G-4M6Y2DD43Y"
};

const firebase = window.firebase.initializeApp(config);

//seedDatabase(firebase);

ReactDOM.render(
    <Fragment>
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </Fragment>,
  document.getElementById('root')
);
