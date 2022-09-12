import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  token = '';

  constructor(private cookies: CookieService, private router: Router) {
    this.token = this.cookies.get('token');
    console.log('TOKENNN', this.token);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
