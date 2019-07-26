package com.example.person.person;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "person")
public class Person{
    @Id
    private Long id;
    private String name;
    private String surname;
    private String department;
    private Short salary;
}