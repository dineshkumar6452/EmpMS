import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { emplist } from './emplist.component';
import { addemp } from './addemp.component';
import { editemp } from './editemp.component';
import { detailComponent } from './details.component';
import { EmployeeService } from './emp.service'



@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  
    RouterModule.forRoot([
      {path : 'emplist', component : emplist },
      {path : 'addemp' , component : addemp},
      { path : 'editemp/:id', component : editemp },
      { path : 'details' ,component : detailComponent}

    ])

  
  
  
   ],
  declarations: [ AppComponent, HelloComponent, emplist, addemp,editemp, detailComponent ],
  bootstrap:    [ AppComponent ],
  
    providers: [EmployeeService]
})
export class AppModule { }
