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


  private user=new User();
  private photo=new Photo();
  private myPhotoList: Photo[];

  constructor(private userService: UserService, private photoService: PhotoService/*,  private router: Router */) {

  }
  ngOnInit(): void {
    this.userService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse((JSON.stringify(user)));

        error => { console.log(error) }
      }

    )
    this.getPhots();
  }
  getPhots(){
  this.photoService.getPhotosByUserId(this.user.userId).subscribe(
    photoList => {
      this.myPhotoList = JSON.parse((JSON.stringify(photoList)));


      console.log(this.myPhotoList.length +" ->"+ this.user.userName);
    })
  }
}
