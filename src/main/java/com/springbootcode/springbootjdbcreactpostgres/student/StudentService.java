package com.springbootcode.springbootjdbcreactpostgres.student;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

    public List<Student> getAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(), "James", "Bond", "james.bond@testemail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Elisa", "Tamara", "elisa.tamara@testemail.com", Student.Gender.FEMALE)
        );
    }
}
