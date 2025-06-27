import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './site-logo/logo.component';


@NgModule({
  declarations: [LoginComponent,SignupComponent,LogoComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbAlert
  ]
})
export class AuthModule { }
