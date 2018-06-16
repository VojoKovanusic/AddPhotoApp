import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PointService } from '../../service/point/point.service';
import { Point } from '../../model/points';
import { UserService } from '../../service/user/user.service.service';
import { CommentService } from '../../service/comment/add-comment.service';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  points: Point[];
  author: String;
  zoom: number = 8;
  lat: number = 43.95000;
  lng: number = 17.860000;

  private user: User;
  private photo: Photo=new Photo();
  private comments:Comment[]= new Array;

  constructor(
     
    private userService: UserService,
    private photoService: PhotoService,
    private router: Router, 
    private location: Location,
    private pointService: PointService,
    private commentService: CommentService) { }

  ngOnInit() {
    
    this.photo = this.photoService.getter();
    this.userService.getUsernameByPhotosName(this.photo.photoName)
    .subscribe(user=>
    this.user=user);


    this.pointService.getPointByPhotoId(this.photo.photoId)
      .subscribe(points => {
        this.points = points;
      }
      )

      this.commentService.getCommentByPhotoId(this.photo.photoId)
      .subscribe(data=>{
        this.comments=data
      })
  }
  check(){
    return this.userService.checkLogin();
  }
  back() {

    this.location.back();
  }
  
  addGPSLocation(photo){
    this.photoService.seter(photo);
    this.router.navigate(["/add/coordinate"]);
  }

  addComment(photo){
    this.photoService.seter(photo);
    this.router.navigate(["/add/comment"]);
  }
}

