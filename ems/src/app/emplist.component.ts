import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './emp.service';


@Component({
  selector : 'emp-list',
  templateUrl: './emplist.component.html' 

})
export class  emplist implements OnInit   {


  
  constructor(private router: Router,
    private employeeService:EmployeeService){};

 
   public employeelist = [];

   
  ngOnInit(){
    

    this.employeeService.getEmployees().subscribe((data: any) =>  {
      this.employeelist=data });

   }




  
  


}
