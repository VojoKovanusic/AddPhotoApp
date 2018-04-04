import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../model/photo';


@Injectable()
export class PhotoService  {

  /* private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers }); */
  url = "http://localhost:8080/photo/allPhoto/";

  constructor(private http: Http, private httpClient: HttpClient) {
  }
  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.url);
  }

   getPhotosByUserId(id:number): Observable<Photo[]>{
     let url="http://localhost:8080/photo/photoByUserId/"+id;
     //let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
     return this.httpClient.get<Photo[]>(url);
   
   } 
   


}
