import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './page';
import { Http } from '@angular/http';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  photos:Array<Photo> 
  p: number = 1;
  
  constructor(private photoService :PhotoService,private router:Router){}

  ngOnInit() {
    return this.photoService.getPhotos()
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
  this.router.navigate(["/photo/detail"]);
 }
   
}

