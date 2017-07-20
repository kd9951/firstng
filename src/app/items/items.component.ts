import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {

  members;
  
constructor() {  
  }

  ngOnInit() {
    
  }

}
