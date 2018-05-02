import { Component, OnInit } from '@angular/core';


import { User } from '../../model/user';
import { Photo } from '../../model/photo';
import { UserService } from '../../service/user/user.service.service';
import { PhotoService } from '../../service/photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent implements OnInit {

  private myPhotoList: Photo[];
 private userName=localStorage.getItem("currentUserName");
  constructor(private userService: UserService,private router:Router, private photoService:PhotoService) {

  }
  ngOnInit(): void {
    this.userService.getPhotosByUsername(this.userName).subscribe(
      photos => {
        this.myPhotoList = JSON.parse((JSON.stringify(photos)));
        error => { console.log(error) }
      }

    )
  
  }
  
  updatePhoto(photo:Photo){ 
    this.photoService.seter(photo);
   this.router.navigate(["/update"]);
  }
  
  addPhoto(){ 
   this.router.navigate(["/add/photo"]);
  }
  //radi
  deletePhoto(photo:Photo){
    this.photoService.deletePhoto(photo).subscribe(data=>{
      this.myPhotoList.splice(this.myPhotoList.indexOf(photo),1);
    }, (error)=>console.log(error));
  }}
