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
import { Router } from '@angular/router';

@Injectable()
export class UserService {
   private user :User;
  token: string;
  constructor(private http: Http, private httpClient: HttpClient,private router:Router) { }

  //private headers = new Headers({ 'Content-Type': 'application/json', 'Authorisation': 'Bearer ' + localStorage });
  //private options = new RequestOptions({ headers: this.headers });
  baseUrl="http://localhost:8080";
 
   
 


  sendCredential(model) {
    
    let headersCredential = new Headers({'Content-Type': 'application/json', 'Authorisation': 'Bearer ' + localStorage });
    return this.http.post(this.baseUrl+"/login", JSON.stringify(model), { headers: headersCredential });
  }

  sendToken(token) {
    let tokenUrl = this.baseUrl+"/users";
    console.log('Bearer '+token);
    let getHeaders = new Headers({'Authorization':'Bearer '+ token });
  
    
    return this.http.get(tokenUrl, { headers: getHeaders })
  }

  logout() {
 
    if(
    window.confirm(localStorage.getItem("currentUserName") +'! Are sure you want to logout ?')){
    localStorage.setItem("token", "");
    localStorage.setItem("currentUserName", "");
    }
    else { this.router.navigate(["/*"])}
  }

  checkLogin() {

    if (localStorage.getItem("currentUserName") != null &&
      localStorage.getItem("currentUserName") != '' &&
      localStorage.getItem("token") != '') {
      return true;
    }
    else
      return false;
  }
 
 isMailExist(mail:string): Observable<boolean>{
  return this.httpClient.get<boolean>(this.baseUrl+"/isMailExist/"+mail);
}
isMailExistUpdate(newMail:string,oldMail:string): Observable <boolean>{
  return this.httpClient.get<boolean>(this.baseUrl+"/isMailExist/update/"+newMail+"/"+oldMail);
}
isUsernameExist(username:string): Observable<boolean>{
  let url=this.baseUrl+"/isUserNemeExists/";
  return this.httpClient.get<boolean>(url+username);
} 
isUsernameExistUpdate(newUsername:string,oldUsername:string): Observable<boolean>{
  let url=this.baseUrl+"/isUserNemeExists/update/"+newUsername+"/"+oldUsername;
  return this.httpClient.get<boolean>(url);
}
  getAllUsers() {
     
    return this.httpClient.get<User[]>(this.baseUrl+"/photo/allPhoto");
  }
  getAllEmails() {
    let url=this.baseUrl+"/emails"
    return this.httpClient.get<String[]>(url);
  }

  updateUsersAndPhoto(userName:String, user: User ){
    let url = `${this.baseUrl}/user`+userName;
    return this.httpClient.put(url,user);
  }

  getUsersByUserName(username: string) {
    return this.httpClient.get<User>(this.baseUrl+"/user/username/"+ username);
  }
  getPhotosByUsername(username: string) {
    let url=this.baseUrl+"/photo/byUsername/"
    return this.httpClient.get<User>(url + username);
  }
  getUsernameByPhotosName(photoName: string) {
    let url=this.baseUrl+"/user/byPhotoName/"
    return this.httpClient.get<User>(url + photoName);
  }
  deleteUserByUserName(userName: string) {
    let url=this.baseUrl+"/user/delete/"
    return this.httpClient.delete<User>(url + userName);
  }
  updateUser(user: User ){ 
    let url=this.baseUrl+"/user/"
    return this.httpClient.put<User>(`${url}`,user);
   
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


