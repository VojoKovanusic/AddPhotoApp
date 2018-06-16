import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommentService } from '../../service/comment/add-comment.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { Photo } from '../../model/photo';
import { Comment } from "../../model/comment";
import { PhotoService } from '../../service/photo/photo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-sugestion',
  templateUrl: './add-sugestion.component.html',
  styleUrls: ['./add-sugestion.component.css']
})
export class AddSugestionComponent implements OnInit {

  private form:FormGroup;
  
  private photo: Photo=new Photo();
  private user: User=new User();
  private content:string;


  ngOnInit() {
    this.photo = this.photoService.getter();
    this.form = new FormGroup(   {
        
      content: new FormControl('', [
           Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250) 
        
      ])
   } )

  }

  constructor(
    private location: Location,
    private photoService: PhotoService,
    private addComentService: CommentService,
    private httpClient: HttpClient,
    private router:Router,
    private userService:UserService ) {
    
   }


 addComment(){
 this.addComentService.saveNewComment(localStorage.getItem("currentUserName"),this.photo,  this.content  ).
  subscribe((data)=>{
    
    (error)=>
   {console.log(error)}
 }  
)
this.router.navigate(["/determinations"])

 
} 

check(){
  return this.userService.checkLogin();
}

}
  
