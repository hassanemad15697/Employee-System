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

const routes : Routes =[
  {path: 'signup' , component : SignupComponent},
  {path: 'employee' , component : EmployeeContentComponent},
  {path: 'actions' , component : OptionsComponent}
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
