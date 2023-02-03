import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  baseUrl = "http://localhost:3000/employeesData";

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {}

  getEmployees(){
    return this.http.get<Employee[]>(this.baseUrl);
  }
  addEmployees(employee:Employee){
    return this.http.post<Employee>(this.baseUrl,employee);
  }
  deleteEmployees(id:string){
    return this.http.delete(this.baseUrl + '/' + id);
  }
  
}
