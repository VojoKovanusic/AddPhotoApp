import { Component, OnInit } from '@angular/core';

import { error } from 'util';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { User } from '../../model/user';
import { PointService } from '../../service/point.service';
import { Point } from '../../model/points';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  points: Point[];
  author: String;
  photo: Photo;
  lat: number = 43.95;
  lng: number = 17.86;

  user: User;

  lati = [44.606000, 44.306000, 44.806000];
  long = [17.860000, 17.260000, 17.660000];

  zoom: number = 8;
  constructor(private photoService: PhotoService, private pointService: PointService) {

  }
  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(photos => {
        this.photos = photos;



      },
        error => { console.log(error) })


  }
 

/* addGpsLocation(photos:Photo[]){
   
  for(let photo of photos)
  this.pointService.getPointByPhotoId(photo.photoId)
  .subscribe(points => {
    this.points=points;
  
  } 
  )*/
 
}

