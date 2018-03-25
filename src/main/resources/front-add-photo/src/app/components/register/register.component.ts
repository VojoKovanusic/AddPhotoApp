import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { User } from '../../model/user';
import { RegisterService } from '../../service/register/register.service.service';
import { UserService } from '../../service/user/user.service.service';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 
  private user: User=new User();
  private registreted :boolean=false;
  constructor(
    private registerService: RegisterService, 
    private router: Router,
    private userService: UserService ) { }
  
  processFormOnSubmit() {
    /* if(this.user.id==undefined){ */
      this.registerService.addUser(this.user).subscribe(
        (user)=>
        {
        console.log(user),
        this.router.navigate(["/login"]),
        (error)=>
        {console.log(error)}
      } 
    )
    }
   /* else{
      
      this.service.updateUser(this.user).subscribe(
        (user)=>
        {
        this.router.navigate(["/login"]),
        (error)=>
        {console.log(error)}
      } 
    )
   } }   */
  
  }
  