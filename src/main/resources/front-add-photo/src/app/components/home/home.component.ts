import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import { UserService } from '../../service/user/user.service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 today = Date.now();
  constructor( ) { }

  ngOnInit() {

  

  }

    } 
