
document.getElementById("studentForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;

    let li = document.createElement("li");

    li.innerHTML = "Name: " + name +
                   " | Roll No: " + roll +
                   " | Department: " + department;

    document.getElementById("studentList").appendChild(li);

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

}
