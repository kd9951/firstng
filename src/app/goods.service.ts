import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";         // <--- 追加
import { Observable } from 'rxjs/Observable'; // <--- 追加
import 'rxjs/add/operator/map';               // <--- 追加
import { SearchCondition } from './searchbox/searchbox.component';

@Injectable()
export class GoodsService {

  url = 'http://kagu350-test.com/admin/api/';

  constructor(private http: Http) { }

  get() {
      return this.http.get( this.url + 'Goods/Item/' )
        .map(response => response.json().body);
    }

  search( searchConditions :SearchCondition ){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://kagu350-test.com/admin/api/Goods/Item/7800',searchConditions,{headers: headers})
    .map(response => response.json().body);

  }

}
 
