package com.spring.dao;

import com.spring.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200/")
@RepositoryRestResource
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

}
