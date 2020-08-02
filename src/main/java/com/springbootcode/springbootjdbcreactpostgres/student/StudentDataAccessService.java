package com.springbootcode.springbootjdbcreactpostgres.student;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class StudentDataAccessService {

    public List<Student> selectAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(), "James", "Bond", "james.bond@testemail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Elisa", "Tamara", "elisa.tamara@testemail.com", Student.Gender.FEMALE)
        );
    }
}
