import { FooterComponent } from './modules/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
})
export class CoreModule {}
