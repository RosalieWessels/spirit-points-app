var firebaseConfig = {
  apiKey: "AIzaSyDw4yV21-ffCNPoGDtHL-cSs6Y4-8FVN2E",
  authDomain: "pinewoodspiritpointswebs-3b49d.firebaseapp.com",
  databaseURL: "https://pinewoodspiritpointswebs-3b49d.firebaseio.com",
  projectId: "pinewoodspiritpointswebs-3b49d",
  storageBucket: "pinewoodspiritpointswebs-3b49d.appspot.com",
  messagingSenderId: "604971263604",
  appId: "1:604971263604:web:e502093a66094f19495321",
  measurementId: "G-LZEV31GP0X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();

var user = localStorage.getItem("name");
console.log(user);

function backButtonClicked() {
  window.location.href = "index.html";
}

function createAccount(email, password, _callback){
  alert("Going to create account");
  alert(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}

function createNewUserButtonClicked(){
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  var masterUsers = ["23rwessels@pinewood.edu"];

  if (masterUsers.includes(user) == true) {
    alert("MASTER USER");
    createAccount(email, password, function() {
        console.log('huzzah, I\'m done!');
    });
  }
  else{
    alert("You do not have the permission to create a new account")
  }
}
