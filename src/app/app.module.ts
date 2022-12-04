import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { UniversalInterceptor } from './core/interceptor/universal-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UniversalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // The TransferHttpCacheModule is imported here beacuse http call don't duplicate in server side
    CoreModule,
    TransferHttpCacheModule,
    HttpClientModule,
  ],
})
export class AppModule {}
