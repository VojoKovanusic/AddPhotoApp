import { Component, OnInit } from '@angular/core';
 
import { error } from 'util';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

 
  photos: Photo[]=[];
  author: String;
  user: User;
  
  constructor(private photoService: PhotoService) {
  
  }
  ngOnInit() {
    return this.photoService.getPhotos()
    .subscribe(photos=> {
      this.photos=photos;
       console.log(this.photos);
  },
  error => { console.log(error) })
}
getUserByPhotoId(){
/*  this.author=service.getUserByPhotoId(); */
}
}

