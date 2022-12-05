import { FooterComponent } from './modules/footer/footer.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
})
export class CoreModule {}
