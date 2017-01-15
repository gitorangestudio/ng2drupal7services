import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class MainService {

  private serviceURL: string = "http://localhost:81/api";
  private headers: Headers = new Headers(
  {

  	"Accept": "application/json",
  	"Content-Type": "application/json",
  }
  );

  constructor(private http: Http) { }

 	getURL(url: string): string {

 		return this.serviceURL + url;
 	}

  getOptions(options: RequestOptionsArgs): RequestOptionsArgs {
 		let op = {Headers: this.headers};
 		return Object.assign(op, options);
 	}


  get(endpoint: string, options?: RequestOptionsArgs): Observable<Response>{

  	let url = this.getURL(endpoint);
  	let op = this.getOptions(options);
  	return this.http.get(url, op);
  }

  post(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response>{

  	let url = this.getURL(endpoint);
  	let op = this.getOptions(options);
  	return this.http.post(url, body, op);
  }

  put(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response>{

  	let url = this.getURL(endpoint);
  	let op = this.getOptions(options);
  	return this.http.put(url, body, op);
  }

  delete(endpoint: string, options?: RequestOptionsArgs): Observable<Response>{

  	let url = this.getURL(endpoint);
  	let op = this.getOptions(options);
  	return this.http.delete(url, op);
  }

}

/*
CRUD
The basis of the REST server. In the below:

[endpoint_path] refers to the Path to the endpoint you defined when setting up the endpoint.
[resource] is the name of the resource, like node or taxonomy_term.
[resource_id] is the id of the resource you're acting on.
Create: POST /[endpoint_path]/[resource] + body data
Retrieve: GET /[endpoint_path]/[resource]/[resource_id]
Retrieve: GET /[endpoint_path]/[resource]
Update: PUT /[endpoint_path]/[resource]/[resource_id] + body data
Delete: DELETE /[endpoint_path]/[resource]/[resource_id]
http://localhost:81/api/node?parameters[uid]=1
*/
