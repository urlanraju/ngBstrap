import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './register/register.component';

//Inside module routes never go for empty path redirect it won't work similar to the root routes
const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  { component: SignupComponent, path: 'signup' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
