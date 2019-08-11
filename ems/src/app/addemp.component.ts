import { Component } from '@angular/core';
import { EmployeeService } from './emp.service';
import { User } from './userModal';
import { Router } from '@angular/router';
import { emplist } from './emplist.component';
 

@Component({
  selector: 'add-emp',
  templateUrl: './addemp.component.html'
  })
export class addemp  {


//----------------Constructor--------------------------
  constructor(private employeeService : EmployeeService, private router : Router, public changes : emplist){ }


//------------------Variables and Modals-----------------  
    userModal = new User( "","","","");  
    public dataPost= this.userModal;


  
  
//--------------Methods-------------------------------------
  addEmpToService(){
    this.employeeService.addEmployee(this.userModal);
    this.changes.ngOnInit();
    this.router.navigate(['./ems/emplist']);     


  }

}














  
