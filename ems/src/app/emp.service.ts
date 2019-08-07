import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',

})
export class EmployeeService {

 

  constructor(private http : HttpClient){}

  private _url : string = "API/employees.json";
  
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }


  //addEmployee(){

    //this.emplist.push({"id" : 5, "name" : "Ram" , "location": "Banglore","email":"ram@gmail.com",'mobile':789456123    })
  //}

}