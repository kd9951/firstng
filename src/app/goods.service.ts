import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";         // <--- 追加
import { Observable } from 'rxjs/Observable'; // <--- 追加
import 'rxjs/add/operator/map';               // <--- 追加
import { SearchCondition } from './searchbox/searchbox.component';

@Injectable()
export class GoodsService {

  url = 'http://kagu350-test.com/admin/api';
  headers :Headers;
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  get() {
      return this.http.get( this.url + 'Goods/Item/' )
        .map(response => response.json().body);
    }

  search( searchConditions :SearchCondition ){
    return this.http.post( this.url + '/Goods/Item',searchConditions,{headers: this.headers})
    .map(response => response.json().body);
  }

  count( searchConditions :SearchCondition ){
    return this.http.post( this.url + '/Goods/Count',searchConditions,{headers: this.headers})
    .map(response => response.json().body);
  }

}
 
