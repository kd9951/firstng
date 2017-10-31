import { Component, Input, Output, OnInit } from '@angular/core';
import { BasechartComponent } from '../basechart/basechart.component';
import { StatisticsService } from '../../statistics.service';

@Component({
  selector: 'app-linechart',
  templateUrl: '../linechart/linechart.component.html',
  styleUrls: ['../linechart/linechart.component.scss']
})
export class LinechartComponent extends BasechartComponent implements OnInit {

  // public brandPrimary = '#cccccc';
  public brandSuccess = '#cccccc';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  @Input() src: string;
  @Input() unit: string;
  @Input() start: string;
  @Input() end: string;
  @Input() brandPrimary: string;

  constructor( statisticsService:StatisticsService ) { super( statisticsService ); }

  ngOnInit() {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      // this.mainChartData1.push(this.random(50, 200));
      // this.mainChartData2.push(this.random(80, 100));
      // this.mainChartData3.push(65);
    }

    this.statisticsService.get( this.src ).subscribe( response =>{
      // for (let i = 0; i <= this.mainChartElements; i++) {
      //   this.mainChartData1.push(this.random(50, 200));
      //   this.mainChartData2.push(this.random(80, 100));
      //   this.mainChartData3.push(65);
      // }
      console.log('linechart-oninit');
      console.log(response); 
      // this.lineChart1Data[0].data = response; 
      // this.mainChartData1 = response; 
      // console.log(this.lineChart1Data); 
      this.mainChartData = [
        {
          data: response,
          label: 'Current'
        },
        {
          data: this.mainChartData2,
          label: 'Previous'
        },
        {
          data: this.mainChartData3,
          label: 'BEP'
        }
      ];
    });

  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public mainChartElements = 10;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];


}
