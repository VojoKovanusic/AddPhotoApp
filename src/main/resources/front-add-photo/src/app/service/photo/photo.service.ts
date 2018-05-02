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
  baseUrl="http://localhost:8080/user/update/userAndPhoto/"+localStorage.getItem("currentUserName");
  constructor(private http: Http, private httpClient: HttpClient) {
  }
  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.url);
  }

  updateUsersAndPhoto(photo: Photo ){ 
    console.log("usao updateProduct")
   return this.httpClient.put<Photo>(`${this.baseUrl}`,photo);
   /*  
    return this.http.put(this.baseUrl, JSON.stringify(photo)).map((response: Response) => response.json()).
      catch(this.errorHendler); */
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
