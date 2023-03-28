import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginData } from '../login/login-data';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginSubject: BehaviorSubject<LoginData | null>;
    public loginData: Observable<LoginData | null>;

  isLoggedIn = false;
  constructor(private router: Router, private http: HttpClient) {
    this.loginSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('jwt')!));
        this.loginData = this.loginSubject.asObservable();
   }

   public get userValue() {
    return this.loginSubject.value;
}

login(username: string, password: string) {
  const headers= new HttpHeaders({authorization: 'Basic ' +window.btoa(username+":"+password)});
  return this.http.get("http://localhost:8181/user/authorize/", {headers, responseType : 'text' as 'json'})
      .pipe(map((loginD: any) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.loginSubject.next(loginD);
            localStorage.setItem('jwt', loginD);
           return loginD;
           
      }))
      
}

}
