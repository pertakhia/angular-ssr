import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: any = FormGroup;
  public submittedLogin = false;

  constructor(
    private bulder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.bulder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get formControlsLogin() {
    return this.loginForm?.controls;
  }

  public checkFormLogin() {
    return this.loginForm?.invalid;
  }

  public onLogin(): void {
    this.submittedLogin = true;
    if (this.loginForm?.invalid) {
      return;
    }
    const username = this.loginForm?.value.username;
    const password = this.loginForm?.value.password;
    const isLogin = this.loginService.login(username, password);
    if (isLogin) {
      this.router.navigate(['/home']);
    } else {
      alert('Username or password is incorrect');
    }
  }
}
