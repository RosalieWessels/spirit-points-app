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

function backButtonClicked() {
  window.location.href = "points.html";
}

function getFacultyFavoritesFirebase() {
    var dbRef= db.collection("history");
    var dbQuery = dbRef.orderBy("date", "desc");

    var dbPromise = dbQuery.get();
    // return the main promise
    return dbPromise.then(function(querySnapshot) {
        var results = [];
        querySnapshot.forEach(function(doc) {
            results.push(doc.data());
        });
        return Promise.all(results);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

getFacultyFavoritesFirebase().then(results => {

    for (var i = 0; i < results.length; i++) {

      element = document.getElementById("add-history");
      li = document.createElement("li");
      li.innerHTML = "<strong> Date: </strong> " + results[i].stringDate + "<strong> Reason: </strong>" + results[i].reason + "<strong> User: </strong>" + results[i].user + "<strong> Grade: </strong>" + results[i].grade + "<strong> Points: </strong>" + results[i].points;
      element.appendChild(li);
    }
});
