import { Injectable } from '@angular/core';
import { MainService } from '../main/main.service';
import { Observable } from "rxjs";
import * as globals from '../globals';


@Injectable()
export class ViewService {

  constructor(private mainService: MainService) { }

  getView(viewName: string, args: [[string]]): Observable<any>{
    return this.mainService.get(globals.endpoint + '/' + viewName + '?uid=' + args).map(res => res.json()).catch(err => Observable.throw(err));
  }

}
