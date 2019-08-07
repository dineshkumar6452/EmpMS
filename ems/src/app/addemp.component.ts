import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './emp.service';
 

@Component({
  selector: 'add-emp',
  templateUrl: './addemp.component.html'



  })
export class addemp  {

  public dataService = new EmployeeService();
   
  addEmpToService(){
     this.dataService.addEmployee();
     console.log(this.dataService.emplist);
  }


}














  
