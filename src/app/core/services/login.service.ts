import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public isLogged: boolean = false;

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      this.isLogged = true;
      return true;
    }
    this.isLogged = false;
    return false;
  }
}
