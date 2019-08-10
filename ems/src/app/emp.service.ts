import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { IEmployee } from './employee';




@Injectable() 
export class EmployeeService {

  // ---------- Variables -------------------------------
  private url : string = "./assets/data/employees.json";
  private LocalhostUrl = "http://localhost:3000/employees/";




   // -------------Constructor---------------------------
  constructor(private http : HttpClient){}
  



  

  // ---------------Method--------------------------------

  getEmployees() {
    return this.http.get(this.LocalhostUrl);
  }

  addEmployee(post:any){
   return this.http.post(this.LocalhostUrl,post).toPromise().then(data => {console.log(data)})
  }

  updateEmployee(url:string,updata:any){
    return this.http.put(url,updata).toPromise().then(data=> {console.log(data)});
  }

  delEmp(url:string){
        return this.http.delete(url);
  }

  getEmployee(url:string){
    return this.http.get(url);
  }





 
}


