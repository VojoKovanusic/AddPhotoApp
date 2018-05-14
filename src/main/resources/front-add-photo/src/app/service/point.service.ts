import { Injectable } from '@angular/core';
import { Point } from '../model/points';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { SavePhoto } from '../model/savePhoto';

@Injectable()
export class PointService {

  constructor(private httpClient: HttpClient) { }
  
  getPointByPhotoId(photoId: number) {
    let url="http://localhost:8080/photo/getPoints/"+photoId;
    return this.httpClient.get<Point[]>(url);
  }
  savePoint(photoName:string,point:Point) {
    let url: string = "http://localhost:8080/photo/add/point/"+localStorage.getItem("currentUserName")+"/"+photoName;
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(`${ url}`,point );
  }
  saveNewPoint(photoAndPoint:SavePhoto) {
    let url: string = "http://localhost:8080/photo/add/new/point";
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(`${ url}`,photoAndPoint );
  }
}
