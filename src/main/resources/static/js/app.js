const API_STUDENTS = "http://localhost:8080/api/students";
const API_COURSES = "http://localhost:8080/api/courses";

// Page load ஆனதும் இரண்டு lists-ஐயும் load பண்ணு
window.onload = function () {
    loadStudents();
    loadCourses();
};

// ---------- TAB SWITCHING ----------
function showTab(tabName) {
    document.getElementById("students").style.display = "none";
    document.getElementById("courses").style.display = "none";
    document.getElementById(tabName).style.display = "block";
}

// ---------- STUDENTS ----------

// Form submit ஆனதும் trigger ஆகும்
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload ஆகாம stop பண்ணும்

    const student = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        address: document.getElementById("address").value,
        enrollmentDate: document.getElementById("enrollmentDate").value
    };

    fetch(API_STUDENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
        .then(response => {
            if (!response.ok) throw new Error("Failed to add student");
            return response.json();
        })
        .then(() => {
            document.getElementById("studentForm").reset();
            loadStudents(); // list refresh பண்ணு
        })
        .catch(error => alert(error.message));
});

// Backend-ல இருந்து students எடுத்து table-ல காட்டு
function loadStudents() {
    fetch(API_STUDENTS)
        .then(response => response.json())
        .then(students => {
            const tbody = document.querySelector("#studentTable tbody");
            tbody.innerHTML = ""; // பழைய rows clear பண்ணு

            students.forEach(s => {
                const row = `
                    <tr>
                        <td>${s.id}</td>
                        <td>${s.firstName} ${s.lastName}</td>
                        <td>${s.email}</td>
                        <td>${s.phoneNumber || "-"}</td>
                        <td><button class="delete-btn" onclick="deleteStudent(${s.id})">Delete</button></td>
                    </tr>`;
                tbody.innerHTML += row;
            });
        });
}

function deleteStudent(id) {
    if (!confirm("Delete this student?")) return;

    fetch(`${API_STUDENTS}/${id}`, { method: "DELETE" })
        .then(() => loadStudents());
}

// ---------- COURSES ----------

document.getElementById("courseForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const course = {
        courseCode: document.getElementById("courseCode").value,
        courseName: document.getElementById("courseName").value,
        description: document.getElementById("description").value,
        credits: parseInt(document.getElementById("credits").value),
        instructor: document.getElementById("instructor").value
    };

    fetch(API_COURSES, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
    })
        .then(response => {
            if (!response.ok) throw new Error("Failed to add course");
            return response.json();
        })
        .then(() => {
            document.getElementById("courseForm").reset();
            loadCourses();
        })
        .catch(error => alert(error.message));
});

function loadCourses() {
    fetch(API_COURSES)
        .then(response => response.json())
        .then(courses => {
            const tbody = document.querySelector("#courseTable tbody");
            tbody.innerHTML = "";

            courses.forEach(c => {
                const row = `
                    <tr>
                        <td>${c.id}</td>
                        <td>${c.courseCode}</td>
                        <td>${c.courseName}</td>
                        <td>${c.credits}</td>
                        <td><button class="delete-btn" onclick="deleteCourse(${c.id})">Delete</button></td>
                    </tr>`;
                tbody.innerHTML += row;
            });
        });
}

function deleteCourse(id) {
    if (!confirm("Delete this course?")) return;

    fetch(`${API_COURSES}/${id}`, { method: "DELETE" })
        .then(() => loadCourses());
}