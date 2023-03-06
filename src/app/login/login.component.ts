import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoginData } from './login-data';

@Component({
  selector: 'fd-order',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent {
  ImagePath: string;
  loginData = new LoginData();
   returnUrl: string;

  constructor(private router:Router, private httpClient:HttpClient, private authService: AuthService,  private route: ActivatedRoute,) { 
    this.ImagePath = '/assets/images/2.jpg'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  ngOnInit(): void {
  }


  onClickSubmit() {
    console.log("You have entered : " + this.loginData.email + " "+ this.loginData.password); 
    const headers= new HttpHeaders({authorization: 'Basic ' +window.btoa(this.loginData.email+":"+this.loginData.password)});
    this.httpClient.get("http://localhost:8181/authorize/", {headers, responseType : 'text' as 'json'})
    .subscribe(
      (response) => {console.log(response);
        //const redirectUrl = this.authService.redirectUrl || '/';
        //const redirectUrl = this.authService.redirectUrl || '/order';
        console.log(this.authService.redirectUrl || '/order');
        this.router.navigate([this.authService.redirectUrl || '/order']);},
      (error) => console.log(error));

    
 }


}

