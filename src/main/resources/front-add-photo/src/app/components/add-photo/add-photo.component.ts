import { Component, OnInit } from '@angular/core';
import { UploadPhotoService } from '../../service/upload-photo/upload-photo.service';
import { AddPhotoService } from '../../service/add-photo/add-photo.service';
import { Photo } from '../../model/photo';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
  
})
export class AddPhotoComponent {
  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user: User;

  constructor(private uoploadPhotoService: UploadPhotoService, private addPhotoService: AddPhotoService, private usrService: UserService) { }

onSubmit(){
  this.usrService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
    user=>{
      this.user=JSON.parse(JSON.parse(JSON.stringify(user))._bopdy);
      console.log(this.user);
      this.newPhoto.user=this.user;
     /*  this.addPhotoService.sendPhoto(this.newPhoto).
      subscribe(
        data=>{
          this.photoAdded=true;
          this.newPhoto=new Photo();
        },
        error=>console.log(error)
        
      ); */
    }
  )
}

}
