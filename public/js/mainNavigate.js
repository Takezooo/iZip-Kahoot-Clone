const mainpage = document.querySelector('.mainpage-container');
const teacherStudent = document.querySelector('.teacherOrStudentContainer');
const studentForm = document.querySelector('.studentContainer');

teacherStudent.style.display = 'none';
studentForm.style.display = 'none';

document.getElementById("start").addEventListener("click", function() {
    mainpage.style.display = 'none';
    teacherStudent.style.display = 'block';
});

document.getElementById("backMain").addEventListener("click", function() {
    mainpage.style.display = 'block';
    teacherStudent.style.display = 'none';
});

document.getElementById("backTS").addEventListener("click", function() {
    studentForm.style.display = 'none';
    teacherStudent.style.display = 'block';
});

document.getElementById("student").addEventListener("click", function() {
    teacherStudent.style.display = 'none';
    studentForm.style.display = 'block'; 
});

