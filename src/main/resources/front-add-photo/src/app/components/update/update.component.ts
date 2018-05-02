import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Routes, Router } from '@angular/router';
import { UserService } from '../../service/user/user.service.service';
import { Photo } from '../../model/photo';
import { PhotoService } from '../../service/photo/photo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
private user:User;
private photo:Photo;
  constructor(private photoService:PhotoService, private router:Router) { }

  ngOnInit() {
    this.photo=this.photoService.getter();
  }
  processFormOnSubmit(){
  this.photoService.updateUsersAndPhoto(this.photo)
  .subscribe( (photo)=>
  {
  console.log(photo),
  this.router.navigate(["/userProfil"]),
  (error)=>
  {console.log(error)}
} 
)
}


}

 