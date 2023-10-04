import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (localStorage.getItem('username')) {
      return true
    }
    else {
      this.toastr.error("For Access This Page Login First")
      this.router.navigate(['/user-auth/login']);
      return false;

    }
  }

}

