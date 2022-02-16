import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string , password: string) {
    if (username == 'hassan' && password == 'Hassan123#')
    {
      sessionStorage.setItem("loginToken",username);
      return true;
    }
    return false;
  }

  isLogedin()
  {
    return (sessionStorage.getItem("loginToken") != null);
  }

  logout(){
    sessionStorage.removeItem("loginToken");
  }

}
