import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private employeeURL = 'http://localhost:8080/api/employees';
  constructor(private httpAllEmployeesAPI : HttpClient) { }

  GetEmployees(): Observable<Employee[]>{
    return this.httpAllEmployeesAPI.get<GetResponseEmployees>(this.employeeURL).pipe(
      map(response => response._embedded.employees)
    );
  }

}

interface GetResponseEmployees{
  _embedded:{
    employees: Employee[]
  }
}
