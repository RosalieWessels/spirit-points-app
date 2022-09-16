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
var allusers = [];
var masterUsers = ["hmark@pinewood.edu", "kriches@pinewood.edu", "etyson@pinewood.edu", "23rwessels@pinewood.edu"];

var user = localStorage.getItem("name");
console.log(user);

var masterUser = false;

if (masterUsers.includes(user) == true) {
  masterUser = true;
}

//var table = document.getElementById("usersTable");
//var titleForTable = document.getElementById("titleForTable");
var tableDiv = document.getElementById("tableID");
var addUserDiv = document.getElementById("addUserDiv");

if (masterUser == false) {
  tableDiv.style.display = "none";
  addUserDiv.style.display = "none";
}
else {
  tableDiv.style.display = "block";
  addUserDiv.style.display = "block";

}

deleteButtons = [];

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("USER IS LOGGED IN");
  } else {
    // No user is signed in.
    console.log("USER IS LOGGED OUT");
  }
});

// var user = firebase.auth().currentUser;
// var credential;
//
// // Prompt the user to re-provide their sign-in credentials
// user.reauthenticateWithCredential(credential).then(function() {
//   // User re-authenticated.
//   console.log("User is logged in")
// }).catch(function(error) {
//   // An error happened.
//   console.log("er")
// });

function backButtonClicked() {
  window.location.href = "points.html";
}

function addNewEmailAdressToFirebase(email){
  db.collection("users").doc(email).set({
      email: email
  })
  .then(function() {
      console.log("Document successfully written!");
      alert("Signup successful!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

function deleteButtonClicked() {
  console.log("Delete user")
}

function findAllUserAccounts(){
  db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        allusers.push(doc.data().email)
    });
    updateUserTable()
  });
}

function setUpButtons(){
  deleteButtons.forEach(function (item, index) {
    var deleteButton = document.getElementById(item)
    deleteButton.onclick = function(){
      var email = item.replace("deleteButton", "")
      alert(email)
      if (masterUsers.includes(user) == true) {
        alert("Master User")

      }
      else{
        alert("You can not delete an account")
      }
    }
  });
}

function updateUserTable(){
  table = document.getElementById("usersTable");
  allusers.forEach(function (user, index) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = user;
    id = "deleteButton" + user;
    deleteButtons.push(id)
    cell2.innerHTML = '<button type="button" class="btn btn-outline-danger" id="'+id+'">Delete</button>'
  });
  console.log(deleteButtons)
  setUpButtons()
}


findAllUserAccounts()


function createAccount(email, password, _callback){
  alert("Going to create account");
  alert(email);
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   alert(errorMessage);
  //   // ...
  // });
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(()=>{
      console.log('Signup successful.');
      addNewEmailAdressToFirebase(email)
     })
  .catch((error)=> {
      console.log(error.code);
      console.log(error.message);
      alert(error.message);
    });
}

function createNewUserButtonClicked(){
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  if (masterUsers.includes(user) == true) {
    alert("MASTER USER");
    createAccount(email, password, function() {
        console.log('huzzah, I\'m done!');
    });
  }
  else{
    alert("You do not have the permission to create a new account");
  }
}

function deleteMyAccountButtonClicked(){
  var userFirebase = firebase.auth().currentUser;

  db.collection("users").doc(user).delete().then(function() {
    console.log("Document successfully deleted!");
    userFirebase.delete().then(function() {
      // User deleted.
      console.log("account deleted");
      alert("Your account has been deleted");
      localStorage.setItem("adminModeTrueOrFalse", "false");
      window.location.href = "index.html";
    }).catch(function(error) {
      // An error happened.
      db.collection("users").doc(user).set({
          email: user
      })
      .then(function() {
          console.log("Document successfully written!");
          alert("Something went wrong. Please try signing in again and then try to delete your account again.");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

    });

  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}
