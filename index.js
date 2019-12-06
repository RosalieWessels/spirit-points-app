//FIREBASE DATABASE
// Your web app's Firebase configuration

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

var username = "something";
var pw = "bla";

/*
var user = firebase.auth().currentUser;
if (user) {
  //User is signed in
  console.log("logged in");
  localStorage.setItem("adminModeTrueOrFalse", "true");
}
else {
  console.log("not logged in");
}
*/

if (localStorage.getItem("adminModeTrueOrFalse") === null) {
  notAdminMode();
}
else {
  var trueOrFalse = localStorage.getItem('adminModeTrueOrFalse');
  if (trueOrFalse == "true") {
    adminMode();
  }
  else if (trueOrFalse == "false") {
    notAdminMode();
  }

}


function notAdminMode() {
  localStorage.setItem("adminModeTrueOrFalse", "false");
  var element = document.getElementsByClassName("admin-mode-table");
  var i;
  for (i = 0; i < element.length; i++) {
    element[i].classList.add("admin-mode-table-hidden");
  }

  var adminButton = document.getElementById("admin-button");
  adminButton.style.display = "block";

  var inAdminButton = document.getElementById("in-admin-button");
  inAdminButton.style.display = "none";

  var historyButton = document.getElementById("history-button");
  historyButton.style.display = "none";
}

function adminMode() {
  var element = document.getElementsByClassName("admin-mode-table-hidden");
  var i;
  for (i = 0; i < element.length; i++) {
    element[i].classList.remove("admin-mode-table-hidden");
  }

  var adminButton = document.getElementById("admin-button");
  adminButton.style.display = "none";

  var inAdminButton = document.getElementById("in-admin-button");
  inAdminButton.style.display = "block";

  var historyButton = document.getElementById("history-button");
  historyButton.style.display = "block";
}

function setUpFirebaseDatabase(){
  // Add collection for Freshman
  db.collection("points").doc("Freshman").set({
      points: 200
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Sophomores
  db.collection("points").doc("Sophomores").set({
      points: 20
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Juniors
  db.collection("points").doc("Juniors").set({
      points: 30
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Seniors
  db.collection("points").doc("Seniors").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for 8th grade
  db.collection("points").doc("8th Grade").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for 7th grade
  db.collection("points").doc("7th Grade").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

//ONLY HAD TO BE USED ONCE, DO NOT UNCOMMENT BECAUSE IT WILL RESET THE POINTS
//setUpFirebaseDatabase();

function getData(){
  var docRef = db.collection("points").doc("Freshman");
  var freshmanPoints = 0;
  var sophomorePoints = 0;
  var juniorPoints = 0;
  var seniorPoints = 0;
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          freshmanPoints = doc.data().points;
          console.log("freshmanPoints", freshmanPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef2 = db.collection("points").doc("Sophomores");

  docRef2.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          sophomorePoints = doc.data().points;
          console.log("SophomorePoints", sophomorePoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef3 = db.collection("points").doc("Juniors");

  docRef3.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          juniorPoints = doc.data().points;
          console.log("JuniorPoints", juniorPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef4 = db.collection("points").doc("Seniors");

  docRef4.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          seniorPoints = doc.data().points;
          console.log("SeniorPoints", seniorPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef5 = db.collection("points").doc("8th Grade");

  docRef5.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          eightGradePoints = doc.data().points;
          console.log("8thGradePoints", eightGradePoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef6 = db.collection("points").doc("7th Grade");

  docRef6.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          seventhGradePoints = doc.data().points;
          console.log("7thGradePoints", seventhGradePoints);
          gotScore([seventhGradePoints, eightGradePoints, freshmanPoints, sophomorePoints, juniorPoints, seniorPoints]);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}


function gotScore(points) {
  //Variables to store the points in for all the grades
  console.log(points);
  var freshman_SP = [points[2], "Freshman"];
  var sophomore_SP = [points[3], "Sophomore"];
  var junior_SP = [points[4], "Junior"];
  var senior_SP  = [points[5], "Senior"];
  var m_8_SP  = [points[1], "8th Grade"];
  var m_7_SP = [points[0], "7th Grade"];

  console.log(points[0], points[1], points[2], points[3]);

  var greatest = Math.max(freshman_SP[0], sophomore_SP[0], junior_SP[0], senior_SP[0]);
  var all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];
  console.log("all grades", all_grades);
  document.getElementById("grades").onclick = function() {sort("grades", all_grades, m_8_SP, m_7_SP, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP);};
  document.getElementById("points").onclick = function() {sort("points", all_grades, m_8_SP, m_7_SP, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP);};

  crowning(all_grades, greatest);

  elementtext(all_grades);
  document.getElementById("m_1-points").textContent = m_7_SP[0];
  document.getElementById("m_2-points").textContent = m_8_SP[0];
  document.getElementById("m1").textContent = m_7_SP[1];
  document.getElementById("m2").textContent = m_8_SP[1];

}

//Admin Alert
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//NO FIREBASE
function validateForm(){
  console.log("inside validate Form");
  //var x = document.forms["myForm"]["uname"].value;
  var x = document.forms.myForm.uname.value;
  //var y = document.forms["myForm"]["password"].value;
  var y = document.forms.myForm.password.value;

  // firebase.auth().signInWithEmailAndPassword(x, y).then(function() {
  //   var user = firebase.auth().currentUser;
  //   if (user) {
  //     //User is signed in
  //     alert("logged in");
  //     localStorage.setItem("adminModeTrueOrFalse", "true");
  //     localStorage.setItem("name", x);
  //   }
  //   else {
  //     alert("not logged in");
  //   }
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   alert("Error", errorMessage);
  //   // ...
  // });
  if(x==username && y == pw){
    alert("Access granted");
    localStorage.setItem('adminModeTrueOrFalse','true');
    localStorage.setItem("name", x);
    getData();
  }
  else{
    alert("Access denied")
  }
}

//Sets the text content of the labels to the variable
function elementtext(all_grades){
  document.getElementById("first-points").textContent = all_grades[0][0];
  document.getElementById("second-points").textContent = all_grades[1][0];
  document.getElementById("third-points").textContent = all_grades[2][0];
  document.getElementById("fourth-points").textContent = all_grades[3][0];

  document.getElementById("first").textContent = all_grades[0][1];
  document.getElementById("second").textContent = all_grades[1][1];
  document.getElementById("third").textContent = all_grades[2][1];
  document.getElementById("fourth").textContent = all_grades[3][1];
}

//gives crown
function crowning(all_grades, greatest){
  $("#fi-crown").removeClass("fas fa-crown");
  $("#se-crown").removeClass("fas fa-crown");
  $("#th-crown").removeClass("fas fa-crown");
  $("#fo-crown").removeClass("fas fa-crown");
  if(all_grades[0][0]==greatest){
    $("#fi-crown").addClass("fas fa-crown");
  }
  if (all_grades[1][0]==greatest) {
    $("#se-crown").addClass("fas fa-crown");
  }
  if (all_grades[2][0]==greatest) {
    $("#th-crown").addClass("fas fa-crown");
  }
  if (all_grades[3][0]==greatest){
    $("#fo-crown").addClass("fas fa-crown");
  }
}

function sortFunction(a, b){
  if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

//toggle button
function sort(toggle, all_grades, m_8_SP, m_7_SP, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP){
  if (toggle=="points"){
    all_grades.sort(sortFunction);
    if (m_8_SP[0]>=m_7_SP[0]){
      document.getElementById("m_1-points").textContent = m_8_SP[0];
      document.getElementById("m_2-points").textContent = m_7_SP[0];
      document.getElementById("m1").textContent = m_8_SP[1];
      document.getElementById("m2").textContent = m_7_SP[1];
    }
  }
  else{
    all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];
    document.getElementById("m_1-points").textContent = m_7_SP[0];
    document.getElementById("m_2-points").textContent = m_8_SP[0];
    document.getElementById("m1").textContent = m_7_SP[1];
    document.getElementById("m2").textContent = m_8_SP[1];
  }
  elementtext(all_grades);
  crowning(all_grades, greatest);
  return;
}

//RUNNING CODE
getData();

function changePoints(gradeToAdd, operation) {
  alert("Lets add some points");
  var pointsToAdd = 0;

  //Get points to add
  if (gradeToAdd == 9){
    pointsToAdd = document.getElementById("freshmanPointsToAdd").value;
    var docRef = db.collection("points").doc("Freshman");
  }
  else if (gradeToAdd==10) {
    pointsToAdd = document.getElementById("sophomorePointsToAdd").value;
    var docRef = db.collection("points").doc("Sophomores");
  }
  else if (gradeToAdd==11){
    pointsToAdd = document.getElementById("juniorPointsToAdd").value;
    var docRef = db.collection("points").doc("Juniors");
  }
  else if (gradeToAdd==12){
    pointsToAdd = document.getElementById("seniorPointsToAdd").value;
    var docRef = db.collection("points").doc("Seniors");
  }
  //TODO: Make it work for all of the other grades. You should be able to leave
  //the code below as is. Update the code below so if, for example, grade
  //= 10 then get the value of sophomorePointsToAdd and make the docRef
  //Sophomore instead of Freshman
  console.log(pointsToAdd);

  //Get current points
  var points = 0;
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          points = doc.data().points;
          console.log("points", points);
          var totalPoints = 0;
          if (operation == 1) {
            totalPoints = parseInt(points) + parseInt(pointsToAdd);
          }
          if (operation == 2) {
            totalPoints = parseInt(points) - parseInt(pointsToAdd);
          }
          console.log("totalpoints", totalPoints);
          var currentDate = new Date();
          console.log("date", currentDate);
          // Update points in database
          docRef.set({
              points: totalPoints
          })
          .then(function() {
              console.log("Document successfully written!");
              var currentUser = localStorage.getItem("name");
              if (operation == 2) {
                pointsToAdd = pointsToAdd - (pointsToAdd*2);
              }
              db.collection("history").doc(String(currentDate)).set({
                  user: currentUser,
                  points: parseInt(pointsToAdd),
                  grade: parseInt(gradeToAdd),
                  date: currentDate,
                  stringDate: String(currentDate)
              })
              .then(function() {
                  console.log("Document successfully written!");
                  getData();
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

}

function exitAdminModeClicked() {
  notAdminMode();
}

function historyButtonClicked() {
  window.location.href = "history.html";
}
