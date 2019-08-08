import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './emp.service';


@Component({
  selector : 'emp-list',
  templateUrl: './emplist.component.html' 

})
export class  emplist implements OnInit   {

//-----------Constructor --------------------------
    constructor(private router: Router,
  
//------------Variables----------------------------  
    private employeeService:EmployeeService){};
    public employeelist = [];

   

//--------------Method-----------------------------

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((data: any) =>  {
    this.employeelist=data });

   }
}
