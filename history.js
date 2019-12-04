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

var historyRef = db.collection("history");
historyRef.orderBy("date", "desc");

db.collection("history").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data().stringDate);
        stringDate = doc.data().stringDate;
        points = doc.data().points;
        user = doc.data().user;
        grade = doc.data().grade;
        element = document.getElementById("add-history");
        li = document.createElement("li");
        li.innerHTML = "<strong> User: </strong> " + user + "<strong> Points: </strong>" + points + "<strong> Grade: </strong>" + grade + "<strong> Date: </strong>" + stringDate;
        element.appendChild(li);
        //pElementContext = pElement.textContent;
        //pElementContext += user + " " + points + " " + grade + " " + stringDate + "%0D";
        //document.getElementById("add-history").textContent = pElementContext;
    });
});
