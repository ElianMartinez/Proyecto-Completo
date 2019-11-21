import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'

})

export class DataApiService {

  constructor(private http: HttpClient) { }


  getAllUsers(){

  	const api = 'http://localhost:5000/api/getall';
  	return this.http.get(api);
  }


  makeHeaders() {
    const headers = new HttpHeaders({
      'content':"application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': 'http://localhost:5000',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin, Authorization, X-Requested-With'
      })
    return headers;
  }
}
