import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from '../../service/add-photo/add-photo.service';
import { Photo } from '../../model/photo';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service.service';
import { error } from 'protractor';
import { format } from 'util';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { RegisterService } from '../../service/register/register.service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { CustomValidation } from '../../validation/custom.validation';
import { BuildFormAddPhoto } from '../../validation/build.form.AddPhoto';
import { Router } from '@angular/router';
import { Point } from '../../model/points';
import { SavePhoto } from '../../model/savePhoto';
 
 

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']

})
export class AddPhotoComponent implements OnInit {
 private isExsistsPhotoName: boolean;
 private form:FormGroup;

 private photoAndPoint:SavePhoto=new SavePhoto();

  selectedFile = null;
  newPhoto: Photo = new Photo();
  user = new User();
  newPoint:Point=new Point();
  url: string = "http://localhost:8080/photo/upload";

  constructor(private httpClient: HttpClient, 
    private addPhotoService: AddPhotoService, 
    private userService: UserService,
    private buildValidationForm: BuildFormAddPhoto,
     private router:Router )
     { }
    
  ngOnInit() {
  

    this.form = this.buildValidationForm.build();

    this.userService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse((JSON.stringify(user)))
      },
      error => console.log(error)

    );
  }

 
  onClickUploade(event) {
    console.log("username: "+localStorage.getItem("currentUserName"));
    console.log("event: "+event);
    this.selectedFile = event.target.files[0];
  }

 

  upload() {
    
    let name = this.selectedFile.name;
    const fd = new FormData();
    fd.append("file", this.selectedFile, name);
    this.newPhoto.imageName="/assets/img/"+name;
    this.newPhoto.created=new Date()

    this.photoAndPoint.photo=this.newPhoto;
    this.photoAndPoint.point=this.newPoint;
   

    this.addPhotoService.isGeniusAndSpeciusExists(this.newPhoto.photoName)
    .subscribe(
      (data)=>{ 
        this.isExsistsPhotoName=data;
        if(!data){
          
          this.addPhotoService.savePhoto(this.photoAndPoint).subscribe((photo)=>{
            console.log(photo);
            (error)=>
            {console.log(error)}
          }  
        )
        this.httpClient.post(this.url, fd).
        subscribe(res => console.log(res));
        (error)=>
        {console.log(error)}
        this.router.navigate(["/userProfil"])

    
    }}
  )
   
  }

 

 get photoName(){
    return this.form.get('photoName');
  }
 
   get title(){
     return this.form.get('title');
   }
   get longitude(){
     return this.form.get('longitude');
   }
   get latitude(){
    return this.form.get('latitude');
  }
}