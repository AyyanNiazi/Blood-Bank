import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCJj3n45tyCNDMjWn9EKhWt-6XSAMBjiPQ",
  authDomain: "project-2-c0a7a.firebaseapp.com",
  databaseURL: "https://project-2-c0a7a.firebaseio.com",
  projectId: "project-2-c0a7a",
  storageBucket: "project-2-c0a7a.appspot.com",
  messagingSenderId: "972266820337"
};

  const fireApp = firebase.initializeApp(config);
  const auth = firebase.auth()
  const db = firebase.database();

  export default {auth,db,fireApp}

  