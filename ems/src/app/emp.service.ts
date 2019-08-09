import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import {throwError as observableThrowError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable() 
export class EmployeeService {

  // ---------- Variables -------------------------------
  private url : string = "./assets/data/employees.json";
  private LocalhostUrl = "http://localhost:3000/employees/";

  private postUrl :string = "http://httpbin.org/post";

  post = [
    {'test' : "name"}
  ]


  


  // -------------Constructor---------------------------
  constructor(private http : HttpClient){}
  
  

  // ---------------------------Method---------------------

  getEmployees() {
    return this.http.get(this.LocalhostUrl);
  }

  addEmployee(){

    console.log("Hello from Service");
    console.log(this.post);

    return this.http.post(this.LocalhostUrl,this.post).toPromise().then((data:any) => data = this.post.push(data))
  }





  // getEmployees(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this.url)
  //                   .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  // }
  // errorHandler(error: HttpErrorResponse){

  //   return observableThrowError(error.message || "Server Error");
  // }

}


