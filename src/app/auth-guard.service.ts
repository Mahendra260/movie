import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { AuthService } from './auth.service';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) { 

  }
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.auth.user.pipe(map(user => {

        if (user) {
            return true;
        } else {
            return this.router.createUrlTree(['/login']);
        }
    }))
}

}
