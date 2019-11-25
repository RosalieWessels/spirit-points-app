//Variables to store the points in for all the grades
var freshman_SP = 20;
var sophomore_SP = 30;
var junior_SP = 10;
var senior_SP  =10;
var m_8_SP  =10;
var m_7_SP = 10;

var greatest = Math.max(freshman_SP, sophomore_SP, junior_SP, senior_SP);
var crowned;

var username = "something"
var pw = "bla"

//Sets the text content of the labels to the variable
document.getElementById("freshman-points").textContent = freshman_SP;
document.getElementById("sophmore-points").textContent = sophomore_SP
document.getElementById("junior-points").textContent = junior_SP
document.getElementById("senior-points").textContent = senior_SP

document.getElementById("m_7-points").textContent = m_7_SP
document.getElementById("m_8-points").textContent = m_8_SP

//Admin Alert
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


if(freshman_SP==greatest){
  crowned="freshman"
}
else if (sophomore_SP==greatest) {
  crowned="sophmore"
}
else if (junior_SP==greatest) {
  crowned="junior"
}

if("freshman"==crowned){
  $("#fr-crown").addClass("fas fa-crown");
}
else if ("sophmore"==crowned) {
  $("#so-crown").addClass("fas fa-crown");
}
else if("junior"==crowned) {
  $("#ju-crown").addClass("fas fa-crown");
}
else{
  $("#se-crown").addClass("fas fa-crown");
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
