import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {

  constructor(private jwtService: JwtService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.jwtService.jwt()) {
      return true; // Allow activation if authenticated
    } else {
      console.warn('Access denied! User not authenticated. Redirecting to login.');
      // Redirect to login page and return a UrlTree
      return this.router.createUrlTree(['/auth']);
    }
  }
}
