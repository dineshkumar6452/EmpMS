import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './emp.service';

@Component({
  selector: 'edit-emp',
  templateUrl: './editemp.component.html'
  })
export class editemp implements OnInit {

  //------------------------Variables--------------
  private employees:any=[];
  private url = "";
  private id :string;

  //--------------------Constructor ----------------
  constructor(private route : ActivatedRoute, private employeeService :EmployeeService,private router : Router){}



  //-------------------Methods----------------------

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.url = "http://localhost:3000/employees/"+this.id;
    this.employeeService.getEmployee(this.url).subscribe((data) => this.employees = data);
  }

  editEmp(){
      console.log(this.employees);
      this.employeeService.updateEmployee(this.url,this.employees);
      console.log("Update is success");

      this.router.navigate(['emplist/details' ,this.id])
     


     
   }


 }
  





  
  
