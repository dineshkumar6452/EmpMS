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
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './search.pipe';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule , 
  
    RouterModule.forRoot([
      {path : 'emplist', component : emplist },
      {path : 'addemp' , component : addemp},
      { path : 'emplist/editemp/:id', component : editemp },
      { path : 'emplist/details/:id' ,component : detailComponent},
      
     

    ])

  
  
  
   ],
  declarations: [ AppComponent, HelloComponent, emplist, addemp,editemp, detailComponent, SearchFilterPipe],
  bootstrap:    [ AppComponent ],
  
    providers: [EmployeeService]
})
export class AppModule { }
