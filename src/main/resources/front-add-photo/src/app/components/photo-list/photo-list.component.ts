import { Component, OnInit } from '@angular/core';
 
import { error } from 'util';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

 
  photos: Photo[]=[];
  selectedPhoto: Photo;
src="assets/img/success.jpg";
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
}

