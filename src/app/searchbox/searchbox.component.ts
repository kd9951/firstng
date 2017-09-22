import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  conditions :SearchCondition

  openDetail = false;
  
  constructor() { }

  ngOnInit() {
    this.conditions = new SearchCondition;
  }
  
  @Output() submit  = new EventEmitter<SearchCondition>();
  @Output() changed = new EventEmitter<SearchCondition>();

  toggleDetail(event) {
    this.openDetail = !this.openDetail;
    console.log( this.openDetail );
  }
  
  openListSearch(event) {
    console.log( 'openListSearch' );
    event.preventDefault( true );
  }

  execute(event) {
    event.preventDefault( true );
    console.log( 'execute' );
    // console.log( this.conditions );

    // var conditions = new SearchCondition;
    // conditions.keyword = this.name;
    this.submit.emit(this.conditions);
  }
  
}

// 本来はココじゃなくて、サーバーとやり取りするサービスに持たすべき、か。
export class SearchCondition {
  keyword      = '';
  nm_goods_min = '';
  nm_goods_max = '';
  fg_pickup    = false;
  fg_public    = false;
  fg_vailed    = false;
  fg_soldout   = false;
  fg_reviewed  = false;
  fg_container = false;
}
