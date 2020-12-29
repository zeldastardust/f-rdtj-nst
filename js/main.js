"use strict"

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Get the modal
var modal = document.getElementById("myModal");
var modal2=document.getElementById("myModal2");
var modal3=document.getElementById("myModal3");
var modal4=document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var modal2btn =document.getElementById("modal2btn");
var modal4btn=document.getElementById("raderaresabtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the button2, open the modal2
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on the button, open the modal
modal2btn.onclick = function() {
  modal3.style.display = "block";
}
// When the user clicks on the button, open the modal4
modal4btn.onclick = function() {
  modal4.style.display = "block";
}


// When the user clicks on <span> , close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks on <span> , close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
// When the user clicks on <span> , close the modal
span3.onclick = function() {
  modal3.style.display = "none";
  modal2.style.display="none";
}


// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
