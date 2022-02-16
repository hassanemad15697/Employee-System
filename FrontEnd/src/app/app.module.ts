import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EmployeeContentComponent } from './employee-content/employee-content.component';
import { OptionsComponent } from './options/options.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RouteActivatedService} from "./service/route-activated.service";

const routes : Routes =[
  {path: 'signup' , component : SignupComponent},
  {path: 'signin' , component : SigninComponent},
  {path: 'employee' , component : EmployeeContentComponent, canActivate: [RouteActivatedService]},
  {path: 'actions' , component : OptionsComponent, canActivate: [RouteActivatedService]},
  {path: '' , component : EmployeeContentComponent, canActivate: [RouteActivatedService]},
  {path: '**' , component : EmployeeContentComponent, canActivate: [RouteActivatedService]}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    EmployeeContentComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
