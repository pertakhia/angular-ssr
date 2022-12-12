import { Subscription } from 'rxjs';
import { LoginService } from './../../services/login.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public userLogined: any = new Subscription();
  public loginCheck: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  public routerPath(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.userLogined = this.loginService.isLogged.subscribe((data: any) => {
      this.loginCheck = data;
    });
  }

  public logOut(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
