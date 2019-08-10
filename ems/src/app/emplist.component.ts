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
    private url:string;
   

      

//--------------Method-----------------------------

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((data: any) =>  { this.employeelist=data });
   }


  moveToEmpId(emp:any){
    this.router.navigate(['/emplist/editemp' , emp])

    }


   

   delteToEmpId(emp:string){
    this.url = "http://localhost:3000/employees/"+emp;
    this.employeeService.delEmp(this.url);
    console.log(this.url);
    console.log("DElete");
      

   }
   




}
