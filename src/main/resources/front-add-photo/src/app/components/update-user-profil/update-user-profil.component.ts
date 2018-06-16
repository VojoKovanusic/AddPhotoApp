import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BuildFormRegister } from '../../validation/build.form.register';

@Component({
  selector: 'app-update-user-profil',
  templateUrl: './update-user-profil.component.html',
  styleUrls: ['./update-user-profil.component.css']
})
export class UpdateUserProfilComponent implements OnInit {
  private form:FormGroup;
private user:User;
model= { password: "", username: "" };
  private curentUserName;

  constructor(
    private userService:UserService,
    private router: Router,
     private buildForm: BuildFormRegister) { }


  ngOnInit() {
    this.form=this.buildForm.build();
    this.user = this.userService.getter();
  }
  processFormOnSubmit() {
    this.userService.updateUser(this.user)
      .subscribe((data) => {
        console.log(data),
          this.router.navigate(["/userProfil"]),
          (error) => { console.log(error) }
      }
      )

      localStorage.setItem("currentUserName", this.user.userName)
  }
  

  back() {
    this.router.navigate(["/userProfil"])
  } }