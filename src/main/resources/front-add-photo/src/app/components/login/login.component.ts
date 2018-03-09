import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../service/user/user.service.service';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  model= { password: "", username: "" };
  private curentUserName

  constructor(private service: UserService) {
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
