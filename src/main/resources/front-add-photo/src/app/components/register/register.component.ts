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
  private user: User;
  private registreted :boolean=false;
  constructor(private service: RegisterService, private router: Router) { }

  ngOnInit() {
    let user = new User();
    this.service.setUser(user);
    this.user = this.service.getUserService();
  }
  
  processFormOnSubmit() {
    /*   if(this.user.userId==undefined){  */
      this.service.addUser(this.user).subscribe(
        (user)=>{
        
        this.registreted=true;
        this.user = new User();
        this.router.navigate(["/login"]),
          (error) => { console.log(error) }
      }
    )
 /* }
  else{
    
    this.service.updateUser(this.user).subscribe(
      (user)=>
      {
      this.router.navigate(["/login"]),
      (error)=>
      {console.log(error)}
    } 
  )
 } */ }

}

