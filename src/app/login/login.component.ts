import { Component, Injectable, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoginData } from './login-data';
import { first } from 'rxjs/operators';

@Component({
  selector: 'fd-order',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent {
  ImagePath: string;
  loginData = new LoginData();


  constructor(private router:Router, private authService: AuthService, private route: ActivatedRoute) { 
    this.ImagePath = '/assets/images/2.jpg'
  }


  ngOnInit(): void {
  }


  onClickSubmit() {
    console.log("You have entered : " + this.loginData.email + " "+ this.loginData.password); 
    this.authService.login(this.loginData.email, this.loginData.password)
  .pipe(first())
  .subscribe({
      next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
      },
      error: error => {
          console.log(error);
      }
  });
 }

}

