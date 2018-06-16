import { Component, OnInit } from '@angular/core';
import { Point } from '../../model/points';
import { User } from '../../model/user';
import { Location } from '@angular/common';
import { UserService } from '../../service/user/user.service.service';
import { Photo } from '../../model/photo';
import { Comment } from '../../model/comment';
import { PhotoService } from '../../service/photo/photo.service';
import { PointService } from '../../service/point/point.service';
import { Router } from '@angular/router';
 
import { CommentService } from '../../service/comment/add-comment.service';

@Component({
  selector: 'app-determination-details',
  templateUrl: './determination-details.component.html',
  styleUrls: ['./determination-details.component.css']
})
export class DeterminationDetailsComponent implements OnInit {

  points: Point[];
  author: String;
  zoom: number = 8;
  lat: number = 43.95000;
  lng: number = 17.860000;

  private comments:Comment[];
  private user: User;
  private photo: Photo=new Photo();

  constructor(
    private userService: UserService,
    private photoService: PhotoService,
    private router: Router, private location: Location,
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
 .subscribe(comments=>{
   this.comments=comments
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
    this.router.navigate(["/add/sugestion"]);
  }
}
