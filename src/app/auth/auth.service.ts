import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  isLoggedIn = false;
  constructor(private router: Router) { }
isAuthenticated(){
  this.redirectUrl = this.router.url;
    return this.isLoggedIn;
  }
}