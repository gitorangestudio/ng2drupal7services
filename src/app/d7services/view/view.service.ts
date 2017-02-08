import { Injectable } from '@angular/core';
import { MainService } from '../main/main.service';
import { Observable } from "rxjs";
import * as globals from '../globals';


@Injectable()
export class ViewService {

  constructor(private mainService: MainService) { }

  getView(viewName: string, args: (string | number)[][]): Observable<any>{

    var string_args = '?';
    if(args.length > 0){
      args.forEach((item, index) => {

        string_args += item[0] + '=' + item[1] + '&';
      });
    }
    return this.mainService.get(globals.endpoint + '/' + viewName + string_args).map(res => res.json()).catch(err => Observable.throw(err));
  }

}
