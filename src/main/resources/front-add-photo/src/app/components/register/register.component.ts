import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { User } from '../../model/user';
import { RegisterService } from '../../service/register/register.service.service';
import { UserService } from '../../service/user/user.service.service';
import { FormGroup } from '@angular/forms';
import { BuildFormRegister } from '../../validation/build.form.register';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}
  private user: User=new User();
  private registreted :boolean=false;
  private form:FormGroup;

  constructor(private userService:UserService,
    private registerService: RegisterService, 
    private router: Router,
     private buildForm: BuildFormRegister) { }

     ngOnInit() {
     
       
      this.form=this.buildForm.build();
    }
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
   } }   
   
  }*/
  get firistName(){
    return this.form.get('firistName');
  }
  get email(){
    return this.form.get('email');
  }
  get userName(){
    return this.form.get('userName');
  }
  get password(){
    return this.form.get('password')
  }
  get test(){
    return this.form.get('test')
  }
  }
  