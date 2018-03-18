import { Component, OnInit } from '@angular/core';
import { UploadPhotoService } from '../../service/upload-photo/upload-photo.service';
import { AddPhotoService } from '../../service/add-photo/add-photo.service';
import { Photo } from '../../model/photo';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service.service';
import { error } from 'protractor';
import { format } from 'util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
  
})
export class AddPhotoComponent {
  selectedFile=null;
  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user: User;
   url: string = "http://localhost:8080/rest/photo/upload";
  constructor(private http:HttpClient ,private uoploadPhotoService: UploadPhotoService, private addPhotoService: AddPhotoService, private usrService: UserService) { }

onSubmit(){
  this.usrService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
    user=>{
      this.user=JSON.parse(JSON.parse(JSON.stringify(user)));
      console.log(this.user);
      this.newPhoto.user=this.user;
     this.addPhotoService.sendPhoto(this.newPhoto).
      subscribe(
        data=>{
          this.photoAdded=true;
          this.newPhoto=new Photo();
        },
        error=>console.log(error)
        
      ); 
    }
  )
}
onClickUploade(event){
  console.log(event);
  this.selectedFile=event.target.files[0];
}
upload(){
  const fd=new FormData();
  fd.append("image", this.selectedFile,  this.selectedFile.name);
 
  return this.http.post(this.url,fd).
  subscribe(res=>console.log(res));

}
}
