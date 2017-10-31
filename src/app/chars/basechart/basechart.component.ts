import { Component, Input, Output, OnInit } from '@angular/core';
import { StatisticsService } from '../../statistics.service';

@Component({
  selector: 'app-basechart',
  templateUrl: './basechart.component.html',
  styleUrls: ['./basechart.component.scss']
})
export class BasechartComponent implements OnInit {

  constructor( protected statisticsService:StatisticsService ) {  }

  @Input() src: string;
  @Input() unit: string;
  @Input() start: string;
  @Input() end: string;
  @Input() brandPrimary: string;

  public mainChartElements = 10;
  public mainChartData: Array<any> = [];
  public mainChartLabels: Array<any> = [];
  public mainChartOptions: Array<any> = [];
  public mainChartColours: Array<any> = [];
  public mainChartLegend = false;
  public mainChartType = 'line';

  ngOnInit() {
    this.statisticsService.get( this.src ).subscribe( response =>{
      console.log(this.mainChartData); 
      this.mainChartData = [{ data: response[0] }]; 
      console.log(this.mainChartData); 
    });
  }

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

}
