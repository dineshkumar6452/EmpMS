import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import   'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root',

})
export class EmployeeService {

 

  constructor(private _http :HttpClient){}

  private _url : string = "API/employees.json"
  
  getEmployees(){
       return this._http.get(this._url)
       .map((response :Response) => response.json());
  }


  addEmployee(){

    this.emplist.push({"id" : 5, "name" : "Ram" , "location": "Banglore","email":"ram@gmail.com",'mobile':789456123    })
  }

}