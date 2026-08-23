package com.example.student_management_system.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Table(name = "courses")
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(unique = true)
    private String courseCode;

    @NotBlank
    private String courseName;

    private String description;

    @NotNull @Min(1) @Max(10)
    private Integer credits;

    private String instructor;
}