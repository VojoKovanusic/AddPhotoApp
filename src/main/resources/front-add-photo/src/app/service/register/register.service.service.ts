import { OnInit, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from "../../model/user";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RegisterService implements OnInit {

    private url: string = "http://localhost:8080/register";
    private user: User;
    
    constructor(private http: Http, private httpClient: HttpClient) { }


    ngOnInit() {
    }
    addUser(user: User) {
        return this.httpClient.post(`${this.url}`, user);}

    getAllUsers():Observable<User[]> {
        return this.httpClient.get<User[]>(this.url + "s");

    }
   
}