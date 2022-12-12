import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public isLogged: any = new BehaviorSubject<any>(false);

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      let loginObj: any = {
        username: username,
        password: password,
      };
      loginObj = JSON.stringify(loginObj);
      localStorage.setItem('userLogin', loginObj);
      this.isLogged.next(true);
      return true;
    }
    this.isLogged.next(false);
    return false;
  }

  logout() {
    localStorage.removeItem('userLogin');
    this.isLogged.next(false);
  }
}
