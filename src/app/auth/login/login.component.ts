import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRequest } from '../models/auth-request';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  router = inject(Router);

  jwtService = inject(JwtService);

  onLogin() {
    this.authService.doLogin(this.loginForm.value as AuthRequest
      
    ).subscribe({
     next : (res) => {
      console.log(res);
      this.jwtService.jwt.set(res.jwt);
      this.router.navigate(['/dashboard']);

     },
     error : (err) =>{
      console.log(err);
      this.jwtService.jwt.set('');
     }
    });

  }

}
