import { Component } from '@angular/core';
import { EmployeeService } from './emp.service';
import { User } from './userModal';
 

@Component({
  selector: 'add-emp',
  templateUrl: './addemp.component.html'
  })
export class addemp  {

  constructor(private employeeService : EmployeeService){ }


  userModal = new User( "","","",123);

  public dataPost= this.userModal;

  
  

  addEmpToService(){
    this.employeeService.addEmployee();

  
    console.log(this.userModal);
  }

}














  
