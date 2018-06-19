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
  private form: FormGroup;
  private user: User;
  model = { password: "", username: "" };
  private curentUserName;
  private isUserNameExist :boolean;
  private isMailExist: boolean;
  private oldMail:string;
  private oldUsername:string;

  constructor(
    private userService: UserService,
    private router: Router,
    private buildForm: BuildFormRegister) { }


  ngOnInit() {
    this.form = this.buildForm.build();
    this.user = this.userService.getter();
    this.oldMail=this.user.email;
    this.oldUsername=this.user.userName;

    console.log("this.oldUsername,"+this.oldUsername)
  }
  processFormOnSubmit() {

/*     this.userService.isMailExist(this.user.email)
    .subscribe(
     data =>{ this.isMailExist=data;
      console.log("this.new,"+this.user.email)
      
          this.userService.isUsernameExistUpdate(this.user.userName, this.oldUsername)
         .subscribe(
           data2 =>{ this.isUserNameExist=data2;
           
            if(!this.isMailExist && !this.isUserNameExist) 
            { */
              this.update();
                
           
         
             /* }
             }   );

      
           }  );
 */


  }



  update() {
    this.userService.updateUser(this.user)
      .subscribe((data) => {
        this.router.navigate(["/userProfil"])
        console.log(data),
       
          (error) => { console.log(error) }
      }
      )

    localStorage.setItem("currentUserName", this.user.userName);

  }
  back() {
    this.router.navigate(["/userProfil"])
  }

  get firistName() {
    return this.form.get('firistName');
  }
  get email() {
    return this.form.get('email');
  }
  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password')
  }

}