
let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter student details");
        return;
    }

    students.push({name: name, roll: roll});

    let li = document.createElement("li");
    li.textContent = name + " - " + roll;

    document.getElementById("list").appendChild(li);

    alert("Student Registered Successfully");

<<<<<<< HEAD
=======
    document.getElementById("studentForm").reset();
});

function searchStudent() {

    let roll = document.getElementById("search").value;

    let student = students.find(s => s.roll === roll);

    if (student) {
        document.getElementById("result").innerHTML =
            "Student Found: " + student.name;
    }
    else {
        document.getElementById("result").innerHTML =
            "Student Not Found";
    }

>>>>>>> student-search
}
