
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

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']

})
export class AddPhotoComponent implements OnInit {
  selectedFile = null;
  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user = new User();
  url: string = "http://localhost:8080/rest/upload";
  constructor( private registerService: RegisterService,private http: Http, private httpClient: HttpClient, private uoploadPhotoService: UploadPhotoService, private addPhotoService: AddPhotoService, private usrService: UserService) { }

  ngOnInit() {
    this.usrService.getUsersByUserName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse((JSON.stringify(user)))
      },
      error => console.log(error)

    );
  }


  /* onSubmit(){
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
  } */
  /////////////////////////////////////////
  onClickUploade(event) {
    console.log(localStorage.getItem("currentUserName"));
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  upload() {
    const fd = new FormData();
    let name = "assets/img/"+localStorage.getItem("currentUserName") + this.selectedFile.name;
    fd.append("file", this.selectedFile, name);
    

    this.newPhoto.setPhotoName(name);
    this.user.photoList.push(this.newPhoto);
    this.usrService.updateUser(this.user).
    subscribe((user)=>{
       (error)=>
      {console.log(error)}
    } 
  );
    return this.httpClient.post(this.url, fd).
      subscribe(res => console.log(res));

  }
   
  //////////////////////////////////////////////
  //prolazi
  /* fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file = fileList[0];
        const formData = new FormData();
        formData.append('file', file, file.name);
        const headers = new Headers();
        // It is very important to leave the Content-Type empty
        // do not use headers.append('Content-Type', 'multipart/form-data');
        headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9....');
        const options = new RequestOptions({headers: headers});
        this.http.post("http://localhost:8080/rest/upload", formData, options)
             .map(res => res.json())
             .catch(error => Observable.throw(error))
             .subscribe(
                 data => console.log('success'),
                 error => console.log(error)
             );
    }
  } */
}
