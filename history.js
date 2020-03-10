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
