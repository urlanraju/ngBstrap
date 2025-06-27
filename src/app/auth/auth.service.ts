import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './models/user';
import { environment } from '../../environments/environment';
import { AuthResponse } from './models/auth-response';
import { AuthRequest } from './models/auth-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  httpClient = inject(HttpClient);

  doLogin(authRequest : AuthRequest){
    return this.httpClient.post<AuthResponse>(environment.baseApiUrl+'auth/authenticate',authRequest);
  }

  registerUser(user : User){
    return this.httpClient.post<string>(environment.baseApiUrl+'auth/register',user);
  }

}
