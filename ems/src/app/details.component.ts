import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './emp.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'detail-emp',
  templateUrl: './details.component.html'



  })
export class detailComponent implements OnInit  {
 //---------------Variables--------------------------
  private employees: any = [];
  private id : string;
  private url: string;


  //-----------------Constructor ---------------------
  constructor(private route : ActivatedRoute,private employeeService : EmployeeService ){};

  //------------------Methods -------------------------
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.url = "http://localhost:3000/employees/"+this.id;
    this.employeeService.getEmployee(this.url).subscribe((data) => this.employees = data);
   }

}
