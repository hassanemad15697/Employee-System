import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-employee-content',
  templateUrl: './employee-content.component.html',
  styleUrls: ['./employee-content.component.css']
})
export class EmployeeContentComponent implements OnInit {
   employees: Employee[];
  constructor(private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.GetEmployees().subscribe(
       data => this.employees = data
    );
  }
}
