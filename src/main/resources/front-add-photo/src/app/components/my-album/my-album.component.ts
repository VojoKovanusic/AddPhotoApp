import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router/src/router';
import { User } from '../../model/user';
import { Photo } from '../../model/photo';
import { UserService } from '../../service/user/user.service.service';
import { PhotoService } from '../../service/photo/photo.service';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent implements OnInit {

  private myPhotoList: Photo[];
 private userName=localStorage.getItem("currentUserName");
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getPhotosByUsername(this.userName).subscribe(
      photos => {
        this.myPhotoList = JSON.parse((JSON.stringify(photos)));
        error => { console.log(error) }
      }

    )
  
  }
  
   
  
}
