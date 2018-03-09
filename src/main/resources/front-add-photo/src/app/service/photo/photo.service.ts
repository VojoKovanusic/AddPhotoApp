import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PhotoService implements OnInit {
 //ljhgkjgfujgujhu
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  url ="http://localhost:8080/photo/allPhoto/";
  
  constructor(private http: Http ) { 
  }
  getPhotos(){
    return this.http.get(this.url,this.options).map((response: Response) => response.json()).
    catch(this.errorHendler);
  }
  getPhotosByUserId(id:number){
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(this.url, JSON.stringify(id), {headers: headers1});
  
  }
 
  ngOnInit(): void {
    this.getPhotos();
  }        
  errorHendler(error: Response) {
    return Observable.throw(error);
  }
}
