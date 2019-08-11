import { Component } from '@angular/core';
import { EmployeeService } from './emp.service';
import { User } from './userModal';
import { Router } from '@angular/router';
 

@Component({
  selector: 'add-emp',
  templateUrl: './addemp.component.html'
  })
export class addemp  {


//----------------Constructor--------------------------
  constructor(private employeeService : EmployeeService, private router : Router){ }


//------------------Variables and Modals-----------------  
    userModal = new User( "","","","");  
    public dataPost= this.userModal;

  
  
//--------------Methods-------------------------------------
  addEmpToService(){
    this.employeeService.addEmployee(this.userModal);
        
    this.router.navigate(['./ems/emplist']);
    
    
      
  }

}














  
