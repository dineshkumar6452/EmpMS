import { Component } from '@angular/core';
import { EmployeeService } from './emp.service';
import { User } from './userModal';
 

@Component({
  selector: 'add-emp',
  templateUrl: './addemp.component.html'
  })
export class addemp  {


//----------------Constructor--------------------------
  constructor(private employeeService : EmployeeService){ }


//------------------Variables and Modals-----------------  
    userModal = new User( "","","",0);  
    public dataPost= this.userModal;

  
  
//--------------Methods-------------------------------------
  addEmpToService(){
    this.employeeService.addEmployee(this.userModal);
      
  }

}














  
