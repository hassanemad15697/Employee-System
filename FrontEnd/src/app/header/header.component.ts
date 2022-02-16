import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  isAuthonicatedUser(){
    return this.loginservice.isLogedin();
  }
}
