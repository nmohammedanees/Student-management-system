package com.example.backend.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Date;


@Data
@Entity
@Table(name="student")
public class User {
    @Id
    @GeneratedValue
     private Long id;
     private String name;
     private String department;
     private String designation;
     private int salary;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date dob;
     private String address;
    public User() {

    }

    public User(Long id, String name, String department, String designation, int salary, Date dob, String address) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.dob = dob;
        this.address = address;
    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
}
