import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './emp.service';


@Component({
  selector : 'emp-list',
  templateUrl: './emplist.component.html' 

})
export class  emplist {

  constructor(private router: Router) { }
  
   public em  = new EmployeeService();
   employeelist = this.em.getEmployees();

  moveToEmpId(id){
    this.router.navigate(['/editemp', id]);
  }

  

  
  


}
