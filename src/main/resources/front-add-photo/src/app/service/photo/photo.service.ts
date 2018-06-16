import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../model/photo';
import { User } from '../../model/user';


@Injectable()
export class PhotoService  {
private photo:Photo;
  /* private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers }); */
  url = "http://localhost:8080/photo/all/photos"; 
  updateUrl="http://localhost:8080/user/update/userAndPhoto/"+localStorage.getItem("currentUserName");
  deleteUrl="http://localhost:8080/user/delete/userPhoto/"+localStorage.getItem("currentUserName")+"/";
  constructor(private http: Http, private httpClient: HttpClient) {
  }
  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.url);
  }
  getPhotosForDeterminate(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.url+"/forDeterminate");
  }
  getWeather():Observable<any[]>{
  let url="http://api.openweathermap.org/data/2.5/weather?q=blatnica&units=metric&appid=b7bae2afeda57461b504ce0d144be7ca"
  return this.httpClient.get<any[]>(this.url);

}

  updateUsersAndPhoto(photo: Photo ){ 
    
   return this.httpClient.put<Photo>(`${this.updateUrl}`,photo);
  
  }
   deletePhoto(photo: Photo){
    return this.httpClient.delete<Photo>(`${this.deleteUrl+photo.photoId}`);
   }

  getter(){
    return this.photo;
  }
 seter(photo:Photo){
   this.photo=photo;
 }
    
  errorHendler(error: Response) {
    return Observable.throw(error);
  }    
}
