// Get the modal

var MPmodal = document.getElementById("MPModal");



// Get the button that opens the modal

var MP= document.getElementById("MP");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[00];


// When the user clicks on the button, open the modal

MP.onclick = function() {
  MPmodal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal


span.onclick = function() {
  MPmodal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == MPmodal) {
    MPmodal.style.display = "none";
  }
}
