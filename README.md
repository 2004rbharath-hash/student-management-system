# Student Management System

A full-stack web application to manage student records, courses, and enrollments — built with Java, Spring Boot, Hibernate, and MySQL.

## Features

- Add, view, and delete student records
- Add, view, and delete courses
- Enroll students into courses
- RESTful APIs for all operations
- Simple, responsive frontend (HTML, CSS, JavaScript)

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java, Spring Boot |
| ORM | Hibernate (Spring Data JPA) |
| Database | MySQL |
| Frontend | HTML, CSS, JavaScript |
| Build Tool | Maven |

## Project Structure

student-management-system/
├── src/main/java/com/example/student_management_system/
│ ├── entity/ # Student, Course, Enrollment (DB tables)
│ ├── repository/ # JPA repositories (DB queries)
│ ├── service/ # Business logic
│ ├── controller/ # REST API endpoints
│ └── StudentManagementSystemApplication.java
├── src/main/resources/
│ ├── static/ # Frontend (HTML, CSS, JS)
│ └── application.properties
└── pom.xml


## API Endpoints

### Students
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |

### Courses
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/{id}` | Get course by ID |
| POST | `/api/courses` | Create a new course |
| PUT | `/api/courses/{id}` | Update a course |
| DELETE | `/api/courses/{id}` | Delete a course |

### Enrollments
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/enrollments?studentId={id}&courseId={id}` | Enroll a student in a course |
| GET | `/api/enrollments/student/{studentId}` | Get enrollments by student |
| GET | `/api/enrollments/course/{courseId}` | Get enrollments by course |
| DELETE | `/api/enrollments/{id}` | Unenroll a student |

## Setup & Installation

### Prerequisites
- Java 17+
- Maven
- MySQL Server

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/student-management-system.git
   cd student-management-system
```

2. **Create the MySQL database**
```sql
   CREATE DATABASE student_management_db;
```

3. **Configure database credentials**

   Edit `src/main/resources/application.properties`:
```properties
   spring.datasource.username=root
   spring.datasource.password=your_mysql_password
```

4. **Run the application**
```bash
   ./mvnw spring-boot:run
```

5. **Open in browser**

http://localhost:8080


## Screenshots
![Student List](![Screenshot 2026-08-23 213547.png](../../../Users/bk085/OneDrive/Pictures/Screenshots/Screenshot%202026-08-23%20213547.png))


## Author

Built by [Bharath R] as a learning project on Spring Boot, Hibernate, and REST API development.