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
import { PaymentComponent } from './components/payment/payment.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashbComponent } from './components/dashb/dashb.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CardsComponent } from './components/cards/cards.component';
// import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    GetapiComponent,
    PostComponent,
    LoginPageComponent,
    UsertableComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashbComponent,
    AccountsComponent,
    CardsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    BrowserAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
