import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUrl: string;

  constructor(private authService:AuthService, private router: Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

     const isLoggedIn = this.authService.userValue;


    if (isLoggedIn){
      return true
    } else {
       this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }

    
  }
  getCurrentUrl(): string {
    return this.currentUrl;
  }
  
}