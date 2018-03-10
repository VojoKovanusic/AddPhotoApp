import { OnInit, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from "../../model/user";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisterService implements OnInit {


    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    private url: string = "http://localhost:8080/register";
    private user: User;
    
    constructor(private http: Http) { }


    ngOnInit() {
    }
    addUser(user: User) {
        console.log(user)
        return this.http.post(`${this.url}`, user);}

    updateUser(user: User) {
        return this.http.put(`${this.url}`, user);
    }


    getAllUsers() {
        return this.http.get(this.url + "s", this.options).map((response: Response) => response.json()).
            catch(this.errorHendler);;

    }
    setUser(user: User) {
        this.user = user;
    }
    getUserService(): User {
        return this.user;
    }
    errorHendler(error: Response) {
        return Observable.throw(error);
    }
}