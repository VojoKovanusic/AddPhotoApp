import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Photo } from '../../model/photo';

@Injectable()
export class UserService {
   private user :User;
  token: string;
  constructor(private http: Http, private httpClient: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorisation': 'Bearer' + localStorage });
  private options = new RequestOptions({ headers: this.headers });
  baseUrl="http://localhost:8080";
  urlAllPhotos = "http://localhost:8080/photo/allPhoto";
  urlPhotoByUserId = "http://localhost:8080/photo/photoByUserId/";
  urlUserByUserName = "http://localhost:8080/user/username/";
  urlCreateUpdateuser="http://localhost:8080/user/";
  private urlIsMailExist= "http://localhost:8080/isMailExist/";


  sendCredential(model) {
    let headersCredential = new Headers({ 'Content-Type': 'application/json' });
    let tokenUrl = "http://localhost:8080/login";
    
    return this.http.post(tokenUrl, JSON.stringify(model), { headers: headersCredential });
  }

  sendToken(token) {
    let tokenUrl = "http://localhost:8080/users";
    let getHeaders = new Headers({ 'Authorisation': 'Bearer' + token });
    return this.http.get(tokenUrl, { headers: getHeaders })
  }

  logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("currentUserName", "");

    alert("Upravo ste se uspjesno izlogovali!");
  }

  checkLogin() {
    if (localStorage.getItem(
      "currentUserName") != null &&
      localStorage.getItem("currentUserName") != '' &&
      localStorage.getItem("token") != '') {
      // console.log(localStorage.getItem("currentUserName")) 
      // console.log(localStorage.getItem("token"))
      return true;
    }
    else
      return false;
  }
 
//radi
 isMailExist(mail:string):any{
  return this.httpClient.get<any>(this.urlIsMailExist+mail);
}

//radi
  getAllUsers() {
    return this.httpClient.get<User[]>(this.urlAllPhotos);
  }
  getAllEmails() {
    let url="http://localhost:8080/emails"
    return this.httpClient.get<String[]>(url);
  }

  updateUsersAndPhoto(userName:String, user: User ){
    let url = `${this.baseUrl}/user`+userName;
    return this.httpClient.put(url,user);
  }

  getUsersByUserName(username: string) {
    return this.httpClient.get<User>(this.urlUserByUserName + username);
  }
  getPhotosByUsername(username: string) {
    let url="http://localhost:8080/photo/byUsername/"
    return this.httpClient.get<User>(url + username);
  }
  getUsernameByPhotosName(photoName: string) {
    let url="http://localhost:8080/user/byPhotoName/"
    return this.httpClient.get<User>(url + photoName);
  }

  errorHendler(error: Response) {
    return Observable.throw(error);
  }
  setter(user:User) {
    this.user = user;

  }
  getter() {
    return this.user;
  }
  
}


