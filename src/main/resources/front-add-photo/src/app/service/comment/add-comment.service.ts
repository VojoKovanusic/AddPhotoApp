import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Photo } from '../../model/photo';
import { Comment } from '../../model/Comment';
@Injectable()
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  saveNewComment( userName:String, photo:Photo, content:String) {
    let url: string = "http://localhost:8080/photo/add/comment/"+userName+"/"+content;
   // let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(`${url}`,photo);
  }

  getCommentByPhotoId(photoId: number) {
    let url="http://localhost:8080/photo/get/comment/"+photoId;
    return this.httpClient.get<Comment[]>(url);
  }
}
