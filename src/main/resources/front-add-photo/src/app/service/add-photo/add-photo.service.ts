import { Injectable } from '@angular/core';
 
import { Http ,Headers} from '@angular/http';
import { Photo } from '../../model/photo';
import { HttpClient } from '@angular/common/http';
import { Point } from '../../model/points';
import { SavePhoto } from '../../model/savePhoto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddPhotoService {

  constructor( private httpClient: HttpClient) { }
 
 
  savePhoto(photoAndPoint:SavePhoto) {
   
    let url: string = "http://localhost:8080/photo/add/"+localStorage.getItem("currentUserName");
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
   photoAndPoint.photo.determined=true;
   return this.httpClient.post(`${ url}`,photoAndPoint);
  }
  savePhotoForDeterminate(photoAndPoint:SavePhoto) {
   
    let url: string = "http://localhost:8080/photo/add/"+localStorage.getItem("currentUserName");
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
   photoAndPoint.photo.determined=false;
   photoAndPoint.photo.photoName="Not determined!"
   return this.httpClient.post(`${ url}`,photoAndPoint);
  }
  isGeniusAndSpeciusExists(name:string):Observable<boolean>{
    let url="http://localhost:8080/photo/isExists/"
    return this.httpClient.get<boolean>(url+name);
  }
}
