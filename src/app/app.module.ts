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
import { MakepayComponent } from './components/makepay/makepay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
// import { AisiComponent } from './components/aisi/aisi.component';
// import { MatButtonModule } from '@angular/material/button'
// import { WebSocket } from 'websocket';


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
    MakepayComponent,
    // AisiComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
