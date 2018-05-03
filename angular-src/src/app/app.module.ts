import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ImageUploadModule } from 'angular2-image-upload';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { ValidatorService } from './services/validator.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authguard.service';
import { RouteGuardService } from './services/routeguard.service';
import { SidebarComponent } from './customer/sidebar/sidebar.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'customer/login',  component: LoginComponent, canActivate: [RouteGuardService] },
  { path: 'customer/register',  component: RegisterComponent, canActivate: [RouteGuardService] },
  { path: 'customer/dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot()
  ],
  providers: [ValidatorService, AuthService, AuthGuardService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
