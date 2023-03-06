import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'fd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ImagePath: string;
  repeatPassword:string;
   user = new User()
  constructor(private registerService: RegisterService) { 
    this.ImagePath = '/assets/images/3.jpg'
  }

  ngOnInit(): void {
  }

  UserRegister(password2:string){
    console.log(password2)
    if(password2==this.user.password){
      this.registerService.registerUser(this.user)
    }
  }

}
