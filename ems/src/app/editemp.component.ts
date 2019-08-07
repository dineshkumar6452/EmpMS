import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'edit-emp',
  templateUrl: './editemp.component.html'



  })
export class editemp implements OnInit {
  
  public empId;
  public EmpName;
  public empLocation;
  public empmobile;
  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    let  id = this.route.snapshot.params['id'];
    this.empId =id;

  }



  
  
}