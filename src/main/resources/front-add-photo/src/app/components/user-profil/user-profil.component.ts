import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  model= { password: "", username: "" };
  private curentUserName
  constructor(private userService: UserService) { 
    this.curentUserName = localStorage.getItem("currentUserName"); }

  ngOnInit() {
  }

}
