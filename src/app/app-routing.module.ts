import { LoginguardGuard } from './core/guards/loginguard.guard';
import { MissionComponent } from './core/modules/mission/mission.component';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './core/modules/notfound/notfound.component';
import { HomeComponent } from './core/modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'mission',
    component: MissionComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
