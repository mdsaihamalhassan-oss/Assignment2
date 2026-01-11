let students = [];
let editIndex = -1;

// Add or Update Student
function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    if (editIndex === -1) {
        students.push({ name: name, age: age, grade: grade });
    } else {
        students[editIndex].name = name;
        students[editIndex].age = age;
        students[editIndex].grade = grade;
        editIndex = -1;
    }

    clearInput();
    showStudents();
}

// Show Student List
function showStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        list.innerHTML += `
        <tr>
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].grade}</td>
            <td>
                <button onclick="editStudent(${i})">Edit</button>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
}

// Edit Student
function editStudent(index) {
    document.getElementById("name").value = students[index].name;
    document.getElementById("age").value = students[index].age;
    document.getElementById("grade").value = students[index].grade;

    editIndex = index;
}

// Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    showStudents();
}

// Clear Input
function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}
