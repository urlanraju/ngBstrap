import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password-match.validator';
import { LogoComponent } from '../site-logo/logo.component';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class SignupComponent {

  authService = inject(AuthService);

  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:'"<>,.?/\\]).{5,10}$/;

  formBuilder = inject(FormBuilder);

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.pattern(/^\d{10}$/)],
    password: ['', Validators.pattern(this.passwordPattern)],
    rePassword: ['', Validators.required]
  }, {
    // Apply the custom validator to the FormGroup
    // This is where cross-field validation happens
    validators: passwordMatchValidator('password', 'rePassword')
  }
  );

  router = inject(Router);
  registerUser() {
    this.authService.registerUser(this.userForm.value as User).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
