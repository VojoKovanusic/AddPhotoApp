import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Injectable()
export class UserService implements OnInit{
  ngOnInit(): void {
   
  }
  token: string;
  constructor(private http: Http) { }
  
   private headers = new Headers({ 'Content-Type': 'application/json','Authorisation':'Bearer'+localStorage });
    private options = new RequestOptions({ headers: this.headers });
    url ="http://localhost:8080/photo/allPhoto";
    
 
    
    
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
      
      alert("Upravo ste se uspjesno izlogovanli!");
    }
    
    checkLogin() {
      if (localStorage.getItem(
        "currentUserName") != null &&
        localStorage.getItem("currentUserName") != '' &&
        localStorage.getItem("token") != ''){
         // console.log(localStorage.getItem("currentUserName")) 
         // console.log(localStorage.getItem("token"))
          return true;}
          else
          return false;
        }

        getAllUsers(){
          return this.http.get(this.url,this.options).map((response: Response) => response.json()).
          catch(this.errorHendler);
        } 

        getUsersById(id:number){
          return this.http.get(this.url+"/"+id,this.options).map((response: Response) => response.json()).
          catch(this.errorHendler);
        } 
        getUsersByUserName(username:string){
          let tokenUrl = "http://localhost:8080/user/username";
          let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
          let options = new RequestOptions({ headers: this.headers });
          return this.http.get(tokenUrl+"/"+username,options).map((response: Response) => response.json()).
          catch(this.errorHendler);
        } 
    
        errorHendler(error: Response) { 
          return Observable.throw(error);
        }
      }
      
      
      