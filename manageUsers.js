var firebaseConfig = {
  apiKey: "AIzaSyBJD1A0wArmqkvBKF850iTztL4AGbNyInY",
  authDomain: "pinewood-spirit-points.firebaseapp.com",
  databaseURL: "https://pinewood-spirit-points.firebaseio.com",
  projectId: "pinewood-spirit-points",
  storageBucket: "pinewood-spirit-points.appspot.com",
  messagingSenderId: "706426515672",
  appId: "1:706426515672:web:155b646282e7f0b34467ad",
  measurementId: "G-F3KVNP7NNR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();

function backButtonClicked() {
  window.location.href = "index.html";
}

function createNewUserButtonClicked(){
  email = document.getElementById("emailInput").value;
  password = document.getElementById("passwordInput").value;
  alert(email, password);
}
