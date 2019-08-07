import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';



@Injectable() 
export class EmployeeService {

  private url : string = "https://jsonplaceholder.typicode.com/todos/1";
  private http : HttpClient;
  
  
  getEmployees(): Observable<IEmployee[]>{
    console.log("Get employee");
    console.log(this.url);
  
   return this.http.get<IEmployee[]>(this.url)
   
    // return this.http.get<IEmployee[]>(this._url);
    
  }

}


