import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Headers } from "@angular/http";         // <--- 追加
import { GoodsService } from '../goods.service';
import { SearchCondition } from '../searchbox/searchbox.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {

  results:object;
  
  constructor( private http: Http, private goodsService:GoodsService ) {  
  }

  ngOnInit() {
    // this.goodsService.fetch().subscribe( { 'next':response => this.results = response, 'error':response => this.results = null } );
    // this.http.get('http://kagu350-test.com/admin/api/get/Goods/Item/')
    //       .subscribe( response => this.results = response.json().body );

  }

  onSearchSubmitted( searchConditions  :SearchCondition  )
  {
    this.goodsService.search( searchConditions ).subscribe( response => this.results = response );
  }

  onSearchConditionChanged( searchConditions  :SearchCondition  )
  {
    this.goodsService.search( searchConditions ).subscribe( response => this.results = response );
  }


}
