package com.spring.model;

import com.spring.model.Enums.Gender;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "employee")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private int id;
    @Column(name = "employee_name")
    private String name;
    @Column(name = "employee_age")
    private String age;
    @Column(name = "employee_address")
    private String address;
    @Column(name = "employee_phone")
    private String phone;
    @Column(name = "employee_createdDate")
    @CreationTimestamp
    private Date createdDate;
    @Column(name = "employee_lastUpdateDate")
    @UpdateTimestamp
    private Date lastUpdateDate;
    @Column(name = "employee_gender")
    private Gender gender;

}
