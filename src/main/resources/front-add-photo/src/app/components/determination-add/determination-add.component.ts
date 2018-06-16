import { Component, OnInit } from '@angular/core';
import { UploadPhotoService } from '../../service/upload-photo/upload-photo.service';
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
import { BuildFormDetermination } from '../../validation/build.form.determination';
@Component({
  selector: 'app-determination-add',
  templateUrl: './determination-add.component.html',
  styleUrls: ['./determination-add.component.css']
})
export class DeterminationAddComponent implements OnInit {

 
  private form:FormGroup;
 
  private photoAndPoint:SavePhoto=new SavePhoto();
 
   selectedFile = null;
   newPhoto: Photo = new Photo();
   user = new User();
   newPoint:Point=new Point();
   url: string = "http://localhost:8080/photo/upload";
 
   constructor(private httpClient: HttpClient, 
     private uoploadPhotoService: UploadPhotoService, 
     private addPhotoService: AddPhotoService, 
     private userService: UserService,
     private buildValidationForm: BuildFormDetermination,
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
    
           this.addPhotoService.savePhotoForDeterminate(this.photoAndPoint).subscribe((photo)=>{
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