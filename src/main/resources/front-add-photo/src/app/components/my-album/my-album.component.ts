import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Photo } from '../../model/photo';

import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service.service';
import { PhotoService } from '../../service/photo/photo.service';


@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent  {


  private user: User;
  private selectedPhoto: Photo;
  private myPhotoList: Photo[];

  constructor(private userService: UserService, private photoService: PhotoService ,  private router: Router  ) {
    this.userService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log("USER ID:->" + this.user)
        
        this.photoService.getPhotosByUserId(this.user.userId).subscribe(
          photoList => {
            this.myPhotoList = JSON.parse(JSON.parse(JSON.stringify(photoList))._body);
            console.log("USER ID" + this.user.userId)
            
          })
          
          error => { console.log(error) }
        }
        
      )
      
      console.log("USER ID" + this.user.userId )
      
    }
    onSelect(photo:Photo){
      this.selectedPhoto=photo;
      //return this.router.navigate(["/image-detal" , this.selectedPhoto.photoId])
    }
    
  }
  