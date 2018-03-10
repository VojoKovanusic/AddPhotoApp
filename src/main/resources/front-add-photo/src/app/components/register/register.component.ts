import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { User } from '../../model/user';
import { RegisterService } from '../../service/register/register.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: User=new User();
  private registreted :boolean=false;
  constructor(private registerService: RegisterService, private router: Router ) { }

  ngOnInit() {
   /*  let user = new User();
    this.registerService.setUser(user);
    this.user = this.registerService.getUserService(); */
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
   } }   */
  
  }
  