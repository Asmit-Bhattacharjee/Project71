import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAqTgf8jJEZDEwBs3hlcL36bTu5gF4z5bs",
  authDomain: "complaintforum15.firebaseapp.com",
  projectId: "complaintforum15",
  storageBucket: "complaintforum15.appspot.com",
  messagingSenderId: "977919147816",
  appId: "1:977919147816:web:0e6c42dd4246896d185a1d"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

