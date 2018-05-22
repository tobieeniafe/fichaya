import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ImageUploadModule } from 'angular2-image-upload';
import { AngularRaveModule } from 'angular-rave';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './customer/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { ValidatorService } from './services/validator.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authguard.service';
import { RouteGuardService } from './services/routeguard.service';
import { SidebarComponent } from './customer/sidebar/sidebar.component';
import { BookingHistoryComponent } from './customer/booking-history/booking-history.component';
import { AccountSettingsComponent } from './customer/account-settings/account-settings.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SidebarService } from './customer/sidebar/sidebar.service';
import { AccountSettingsService } from './customer/account-settings/account-settings.service';
import { GetStartedService } from './get-started/get-started.service';
import { BookingHistoryService } from './customer/booking-history/booking-history.service';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'customer/login',  component: LoginComponent, canActivate: [RouteGuardService] },
  { path: 'customer/dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'customer/booking',  component: BookingHistoryComponent, canActivate: [AuthGuardService] },
  { path: 'customer/account',  component: AccountSettingsComponent, canActivate: [AuthGuardService] },
  { path: 'get-started',  component: GetStartedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    BookingHistoryComponent,
    AccountSettingsComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AngularRaveModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot()
  ],
  providers: [ValidatorService, AuthService, AuthGuardService, RouteGuardService, SidebarService, AccountSettingsService, GetStartedService, BookingHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
