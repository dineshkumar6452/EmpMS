import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './emp.service';


@Component({
  selector : 'emp-list',
  templateUrl: './emplist.component.html' 

})
export class  emplist implements OnInit   {

//-----------Constructor --------------------------
    constructor(private router: Router, private employeeService:EmployeeService){};
  
//------------Variables----------------------------  
   
    public employeelist = [];
    public term = "";
   

   

//--------------Method-----------------------------

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((data: any) =>  {
    this.employeelist=data });

   }
}
