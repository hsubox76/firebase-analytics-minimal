import firebase from 'firebase/app';
import 'firebase/analytics';

const config = {
  // Fill in with your config.
};

// Initializes Firebase SDK.
firebase.initializeApp(config);
// Initializes Firebase Analytics. Will send "page_view" event automatically.
// (It may take a few seconds before POST request is sent.)
firebase.analytics();