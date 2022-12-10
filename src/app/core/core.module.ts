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
import { SafepipePipe } from './pipes/safepipe.pipe';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { MissionComponent } from './modules/mission/mission.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SafepipePipe,
    NotfoundComponent,
    MissionComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    MissionComponent,
  ],
})
export class CoreModule {}
