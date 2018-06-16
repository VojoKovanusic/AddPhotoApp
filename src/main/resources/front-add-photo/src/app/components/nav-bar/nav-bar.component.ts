import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service.service';

 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  myLocalStorage;
  prijavljen:boolean=this.userService.checkLogin();
  private src="https://i.pinimg.com/564x/1f/4c/ac/1f4cac4f7edbfbd839159b77ee344011.jpg";
  constructor(private userService:UserService) 
  {
    this.myLocalStorage = localStorage 
  }
  check(){
    return this.userService.checkLogin();
  }
  onClick() {
    if( this.check())
    this.userService.logout(); 
  }
  
  ngOnInit() {
    
  }
}
