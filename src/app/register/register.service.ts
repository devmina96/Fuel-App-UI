import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  public registerUser(user: User){
        console.log(user)
  }
}
