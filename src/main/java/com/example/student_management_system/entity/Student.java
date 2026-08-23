package com.example.student_management_system.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "students")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank @Email
    @Column(unique = true)
    private String email;

    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String address;

    @NotNull
    private LocalDate enrollmentDate;
}