import { Component, OnInit } from '@angular/core';
import { Point } from '../../model/points';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { SavePhoto } from '../../model/savePhoto';
import { HttpClient } from '@angular/common/http';
import { AddPhotoService } from '../../service/add-photo/add-photo.service';
import { FormGroup } from '@angular/forms';
import { BuildFormAddPhoto } from '../../validation/build.form.AddPhoto';
import { PointService } from '../../service/point/point.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service.service';

@Component({
  selector: 'app-add-gpscordinate',
  templateUrl: './add-gpscordinate.component.html',
  styleUrls: ['./add-gpscordinate.component.css']
})
export class AddGpscordinateComponent implements OnInit {
  private form:FormGroup;

  private newPoint: Point=new Point();
  private points: Point[];
  private photo: Photo=new Photo();
  private photoAndPoint:SavePhoto=new SavePhoto();


  constructor(
    private photoService: PhotoService,
    private httpClient: HttpClient, 
    private addPhotoService: AddPhotoService,
    private buildValidationForm: BuildFormAddPhoto,
  private pointService:PointService,
  private router:Router,
  private userService:UserService) { }

  ngOnInit() {
    
    this.photo = this.photoService.getter();
    this.form = this.buildValidationForm.build();

  }
addCoordinate(){
  this.photoAndPoint.photo=this.photo;
  this.photoAndPoint.point=this.newPoint;
  
  this.pointService.saveNewPoint(this.photoAndPoint).
  subscribe((photo)=>{
    console.log(photo);
    (error)=>
   {console.log(error)}
 }  
)
this.router.navigate(["/search"])
} check(){
  return this.userService.checkLogin();
}
}
