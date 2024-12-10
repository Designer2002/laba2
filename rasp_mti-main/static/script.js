// Get the modal
var modal = document.getElementById("myModal");

// Get the buttons that open the modal
var addStudentBtn = document.getElementById("addStudentBtn");
var addTeacherBtn = document.getElementById("addTeacherBtn");
var addCourseBtn = document.getElementById("addCourseBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addStudentBtn.onclick = function() {
    modal.style.display = "block";
}

addTeacherBtn.onclick = function() {
    modal.style.display = "block";
}

addCourseBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}