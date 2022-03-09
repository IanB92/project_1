import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


// Login and out Components
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
/////////////////////////////////////////////////////////////////////////////////////


import { MHomeComponent } from './manager/m-home/m-home.component';


// Employee Imports 
import { HomeComponent } from './employee/home/home.component';
import { MyInfoComponent } from './employee/my-info/my-info.component';
import { RequestReimbursementComponent } from './employee/request-reimbursement/request-reimbursement.component';
import { ViewPendingReimbursementsComponent } from './employee/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewResolvedReimbursementsComponent } from './employee/view-resolved-reimbursements/view-resolved-reimbursements.component';
import { UpdateMyInfoComponent } from './employee/my-info/update-my-info/update-my-info.component';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { ReimbursementsComponent } from './manager/reimbursements/reimbursements.component';
import { ListReimbursementsComponent } from './manager/list-reimbursements/list-reimbursements.component';
import { ReimbursementsHttpComponent } from './manager/reimbursements-http/reimbursements-http.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    MHomeComponent,
    MyInfoComponent,
    RequestReimbursementComponent,
    ViewPendingReimbursementsComponent,
    ViewResolvedReimbursementsComponent,
    UpdateMyInfoComponent,

    ReimbursementsComponent,
     ListReimbursementsComponent,
     ReimbursementsHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
