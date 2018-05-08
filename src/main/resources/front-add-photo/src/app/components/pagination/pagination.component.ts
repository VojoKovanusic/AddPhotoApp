import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './page';
import { Http } from '@angular/http';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  photos:Array<Photo> 
  ;
  constructor(private photoService :PhotoService){}

  ngOnInit() {
    return this.photoService.getPhotos()
    .subscribe(photos=> {
      this.photos=photos;
       console.log(this.photos);
  },
  error => { console.log(error) })
  }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;

}

