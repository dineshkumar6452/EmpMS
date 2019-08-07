import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './emp.service';


@Component({
  selector : 'emp-list',
  templateUrl: './emplist.component.html' 

})
export class  emplist implements OnInit   {


  
  constructor(private router: Router){};

  public _em = new EmployeeService();
  public employeelist = [ {"id" : 1, "name" : "Ram" , "location": "Banglore","email":"ram@gmail.com","mobile":789456123}];

   
  ngOnInit(){
    

    this._em.getEmployees().subscribe(data  =>{console.log(data)});
    console.log("ok from emplist");
    }

  moveToEmpId(id){
  this.router.navigate(['/editemp', id]);
   }




  
  


}
