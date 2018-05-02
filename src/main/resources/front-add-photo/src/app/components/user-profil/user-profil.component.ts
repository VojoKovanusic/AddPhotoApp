import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  /* model= { password: "", username: "" }; */
  
  private curentUserName= localStorage.getItem("currentUserName");
  constructor(private userService: UserService) { 
    }

  ngOnInit() {
  }

}
