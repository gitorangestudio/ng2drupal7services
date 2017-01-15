import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from "rxjs";
import { MainService } from '../main/main.service';

@Injectable()
export class NodeService {

  constructor(private mainService: MainService) { }

  getPosts(): Observable<any>{

  	return this.mainService.get('/node').map(res => res.json()).catch(err => Observable.throw(err));
  }

  createNode(body): Observable<any>{

  	return this.mainService.post('/node', body).map(res => res.json()).catch(err => Observable.throw(err));
  }

  UpdateNode(body): Observable<any>{

  	return this.mainService.put('/node/' + body.nid, body).map(res => res.json()).catch(err => Observable.throw(err));
  }

  DeleteNode(nid): Observable<any>{

  	return this.mainService.delete('/node/' + nid).map(res => res.json()).catch(err => Observable.throw(err));
  }
}
