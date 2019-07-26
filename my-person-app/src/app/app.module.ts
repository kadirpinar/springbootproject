import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCenterComponent } from './my-center/my-center.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { InsertComponent } from './insert/insert.component';
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import {TokenInterceptorService} from "./token-interceptor.service";
import { ITComponent } from './it/it.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCenterComponent,
    InsertComponent,
    UpdateComponent,
    LoginComponent,
    ITComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
