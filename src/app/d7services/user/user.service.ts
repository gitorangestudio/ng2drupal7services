import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from "rxjs";
import { MainService } from '../main/main.service';

@Injectable()
export class UserService {

  constructor(private mainService: MainService) { }

  getUser(userId): Observable<any>{
    return this.mainService.get('/user/' + userId).map(res => res.json()).catch(err => Observable.throw(err));
  }

  createUser(user): Observable<any>{
    return this.mainService.post('/user/', user).map(res => res.json()).catch(err => Observable.throw(err));
  }

  deleteUser(userId): Observable<any>{
    return this.mainService.delete('/user/' + userId).map(res => res.json()).catch(err => Observable.throw(err));
  }

  updateUser(user): Observable<any>{
    return this.mainService.put('/user/' + user.uid, user).map(res => res.json()).catch(err => Observable.throw(err));
  }
}



export class User {
  name: string;
  id: number;
  mail: string;
  pass: string;
  status: boolean;
  //roles: Array() = new Array(2);
  constructor (){}

}
