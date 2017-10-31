import { Component, Input, Output, OnInit } from '@angular/core';
import { BasechartComponent } from '../basechart/basechart.component';
import { StatisticsService } from '../../statistics.service';

@Component({
  selector: 'app-simplechart',
  templateUrl: '../simplechart/simplechart.component.html',
  styleUrls: ['../simplechart/simplechart.component.scss']
})
export class SimplechartComponent extends BasechartComponent implements OnInit {

  constructor( statisticsService:StatisticsService ) { super( statisticsService ); }


  ngOnInit() {
    this.statisticsService.get( this.src ).subscribe( response =>{
      console.log(this.mainChartData); 
      this.mainChartData = [{ data: response[0] }]; 
      console.log(this.mainChartData); 
    });
  }

}
