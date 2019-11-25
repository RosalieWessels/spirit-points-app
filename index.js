//Variables to store the points in for all the grades
var freshman_SP = [20, "Freshman"];
var sophomore_SP = [30, "Sophmore"];
var junior_SP = [20, "Junior"];
var senior_SP  = [15, "Senior"];
var m_8_SP  = [15, "8th Grade"];
var m_7_SP = [10, "7th Grade"];

var greatest = Math.max(freshman_SP[0], sophomore_SP[0], junior_SP[0], senior_SP[0]);
var username = "something"
var pw = "bla"
var all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];

//toggle button
function sort(toggle){
  if (toggle=="points"){
    all_grades.sort(sortFunction);
    if (m_8_SP[0]>=m_7_SP[0]){
      document.getElementById("m_1-points").textContent = m_8_SP[0]
      document.getElementById("m_2-points").textContent = m_7_SP[0]
      document.getElementById("m1").textContent = m_8_SP[1]
      document.getElementById("m2").textContent = m_7_SP[1]
    }
  }
  else{
    all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];
    document.getElementById("m_1-points").textContent = m_7_SP[0]
    document.getElementById("m_2-points").textContent = m_8_SP[0]
    document.getElementById("m1").textContent = m_7_SP[1]
    document.getElementById("m2").textContent = m_8_SP[1]
  }
  elementtext()
  crowning(all_grades, greatest)
  return;
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
document.getElementById("m_1-points").textContent = m_7_SP[0]
document.getElementById("m_2-points").textContent = m_8_SP[0]
document.getElementById("m1").textContent = m_7_SP[1]
document.getElementById("m2").textContent = m_8_SP[1]

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
    window.open("admin-site/add_points.html", "_blank")
  }
  else{
    alert("Access denied")
  }
}
