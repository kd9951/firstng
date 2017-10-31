import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";        
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';              


@Injectable()
export class StatisticsService {

  url = 'http://kagu350-test.com/admin/api';
  headers :Headers;
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  get( url:string ) {
    console.log( 'get:url:' + this.url + url );
      return this.http.get( this.url + url )
        .map(response => response.json().body);
    }

}
 
