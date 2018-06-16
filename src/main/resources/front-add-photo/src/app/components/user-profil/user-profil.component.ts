import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  private user: User;
  /* model= { password: "", username: "" }; */
  
  private curentUserName= localStorage.getItem("currentUserName");
  
  constructor(
    private userService: UserService,
    private router:Router
     ) { 
    }

  ngOnInit() {
    this.userService.getUsersByUserName(this.curentUserName)
    .subscribe(
      data=>
      this.user=data
    )  }
    deleteUser(){
      if(
        window.confirm('Are sure you want to delete profil ?')){
    
     localStorage.setItem("token", "");
      localStorage.setItem("currentUserName", "");

      this.userService.deleteUserByUserName(this.curentUserName).
      subscribe(data=>{
        console.log("USAU U UNUTRA"+data)
      }, (error)=>console.log(error));
     
      
      this.router.navigate(["/*"])
      }
      else { this.router.navigate(["/userProfil"])}
     

 
    } 
    
    check(){
      return this.userService.checkLogin();
    }
    
    updateUser(user:User){
      this.userService.setter(user);
      this.router.navigate(["/update/user"]);
    }
}
