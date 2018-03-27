import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../service/user/user.service.service';
import {  Router } from '@angular/router';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  redirect()    {
    return  this.router.navigate(['/userProfil']);
     
  }
  model= { password: "", username: "" };
  private curentUserName;

  constructor(private service: UserService, private router: Router ) {
    this.curentUserName = localStorage.getItem("currentUserName");
  }

  processFormOnSubmit() {
    this.service.sendCredential(this.model).subscribe(
      data => {
        localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
        this.service.sendToken(localStorage.getItem("token")).subscribe(
          data => {
            this.curentUserName = this.model.username;
            localStorage.setItem("currentUserName", this.model.username)
            this.model.username = ""
            this.model.password = "" 
          }, error => console.log(error)
        );
      },
      error => console.log(error)
    )

  }

}
