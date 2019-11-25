//Variables to store the points in for all the grades
var freshman_SP = [10, "Freshman"];
var sophomore_SP = [30, "Sophmore"];
var junior_SP = [20, "Junior"];
var senior_SP  = [15, "Senior"];
var m_8_SP  =10;
var m_7_SP = 10;

var greatest = Math.max(freshman_SP[0], sophomore_SP[0], junior_SP[0], senior_SP[0]);
var crowned;
var username = "something"
var pw = "bla"
var all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];

//toggle button
function sort(toggle){
  if (toggle=="points"){
    all_grades.sort(sortFunction);
  }
  else{
    all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];
  }
  elementtext()
  crowning(all_grades, greatest)
}

function sortFunction(a, b){
  if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

document.getElementById("grades").onclick = function() {sort("grades")};
document.getElementById("points").onclick = function() {sort("points")};

//finds the best grade
function crowning(all_grades, greatest){
  $("#fi-crown").removeClass("fas fa-crown");
  $("#se-crown").removeClass("fas fa-crown");
  $("#th-crown").removeClass("fas fa-crown");
  $("#fo-crown").removeClass("fas fa-crown");
  if(all_grades[0][0]==greatest){
    crowned="first"
  }
  else if (all_grades[1][0]==greatest) {
    crowned="second"
  }
  else if (all_grades[2][0]==greatest) {
    crowned= "third"
  }
//gives the grade with the most spirit points a crown
  if(crowned=="first"){
    $("#fi-crown").addClass("fas fa-crown");
  }
  else if (crowned=="second") {
    $("#se-crown").addClass("fas fa-crown");
  }
  else if(crowned=="third") {
    $("#th-crown").addClass("fas fa-crown");
  }
  else{
    $("#fo-crown").addClass("fas fa-crown");
  }
}

crowning(all_grades, greatest);
//Sets the text content of the labels to the variable
function elementtext(){
  document.getElementById("first-points").textContent = all_grades[0][0];
  document.getElementById("second-points").textContent = all_grades[1][0];
  document.getElementById("third-points").textContent = all_grades[2][0];
  document.getElementById("fourth-points").textContent = all_grades[3][0];

  document.getElementById("first").textContent = all_grades[0][1];
  document.getElementById("second").textContent = all_grades[1][1];
  document.getElementById("third").textContent = all_grades[2][1];
  document.getElementById("fourth").textContent = all_grades[3][1];
}
elementtext()

document.getElementById("m_7-points").textContent = m_7_SP
document.getElementById("m_8-points").textContent = m_8_SP

//Admin Alert
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function validateForm(){
  var x = document.forms["myForm"]["uname"].value;
  var y = document.forms["myForm"]["password"].value;
  if(x==username && y == pw){
    alert("Access granted")
  }
  else{
    alert("Access denied")
  }
}
