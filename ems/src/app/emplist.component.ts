import { Component, OnInit, SimpleChange } from '@angular/core';
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



   ngOnChanges(changes : SimpleChange)
   {
     console.log(changes);

   }


  moveToEmpId(emp:any){
    this.router.navigate(['/ems/emplist/editemp' , emp])

    }

  moveToDetail(emp:any){

    console.log(emp);
    this.router.navigate(['emplist/details/:id', emp])
  }


   

   delteToEmpId(emp:string){
    this.url = this.employeeService.LocalhostUrl+emp;
    this.employeeService.delEmp(this.url);
    console.log("Delete"+ emp);
    this.ngOnInit();
      

   }
   




}
