import { Injectable } from '@angular/core';
 
import { Http ,Headers} from '@angular/http';
import { Photo } from '../../model/photo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddPhotoService {

  constructor( private httpClient: HttpClient) { }
  savePhoto(photo:Photo) {
    let url: string = "http://localhost:8080/rest/photo/add/"+localStorage.getItem("currentUserName");
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(`${ url}`, photo);
  }
}
