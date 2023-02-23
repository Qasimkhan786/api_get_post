import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetapiComponent } from './components/getapi/getapi.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './components/login-page/login-page.component'
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { UsertableComponent } from './components/usertable/usertable.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GetapiComponent,
    PostComponent,
    LoginPageComponent,
    UsertableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
