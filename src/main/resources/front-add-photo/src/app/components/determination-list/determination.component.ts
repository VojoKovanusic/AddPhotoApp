import { Component, OnInit } from '@angular/core';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service.service';

@Component({
  selector: 'app-determination',
  templateUrl: './determination.component.html',
  styleUrls: ['./determination.component.css']
})
export class DeterminationComponent implements OnInit {

  photos:Array<Photo> 
  p: number = 1;
  
  constructor(private photoService :PhotoService,private router:Router,private userService:UserService){}

  ngOnInit() {
    return this.photoService.getPhotosForDeterminate()
    .subscribe(photos=> {
      this.photos=photos;
       console.log(this.photos);
  },
  error => { console.log(error) })
  }
  key: string = 'photoName'; //set default
  reverse: boolean = false;
  //initializing p to one
  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
 photoDetail(photo:Photo){
  this.photoService.seter(photo);
  this.router.navigate(["/determination/detail"]);
}
addPhoto(){
  
  this.router.navigate(["/determination/add"]);
}
check(){
  return this.userService.checkLogin();
}
}
