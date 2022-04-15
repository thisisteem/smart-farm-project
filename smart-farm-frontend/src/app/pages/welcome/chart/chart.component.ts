import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { format, compareAsc } from 'date-fns'
import 'chartjs-adapter-date-fns';


const dates = [
  // new Date('2022-01-01T07:01:36.386Z'),
  // new Date('2022-01-02T02:01:36.386Z'),
  // new Date('2022-01-03T04:01:36.386Z'),
  // new Date('2022-01-04T12:01:36.386Z'),
  // new Date('2022-01-05T16:01:36.386Z'),
  // new Date('2022-01-06T12:01:36.386Z'),
  // new Date('2022-01-07T12:01:36.386Z'),
  '2022-01-01T07:01:36.386Z',
  '2022-01-02T02:01:36.386Z',
  '2022-01-03T04:01:36.386Z',
  '2022-01-04T12:01:36.386Z',
  '2022-01-05T16:01:36.386Z',
  '2022-01-06T12:01:36.386Z',
  '2022-01-07T12:01:36.386Z',
  // new Date(2022, 1, 1),
  // new Date(2022, 1, 2),
  // new Date(2022, 1, 3),
  // new Date(2022, 1, 4),
  // new Date(2022, 1, 5),
  // new Date(2022, 1, 6),
  // new Date(2022, 1, 7),
]
var data_temp = [25.0, 26.0, 28, 24, 23, 25, 26]; // wait for dataset
var humidity = [28, 48, 40, 19, 86, 27, 63]; // wait for dataset
var dirt_humid = [48, 39, 40, 100, 15, 26, 87]; // wait for dataset
var i:number; 
var array_labels: Date[] = [];

for (i = 0; i<dates.length;i++){
  var x = dates[i];
  
  array_labels.push(new Date(x));
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: data_temp,
        label: 'อุณหภูมิ (°C)',
        backgroundColor: 'rgba(0,0,250,0.2)',
        borderColor: 'rgba(0,0,250,1)',
        pointBackgroundColor: 'rgba(0,0,250,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,0,250,0.8)',
        fill: 'origin',
      },
      {
        data: humidity,
        label: 'ความชื้น (%)',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: dirt_humid,
        label: 'ความชื้นดิน (%)',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: array_labels,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    locale: 'th-TH',
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        type: 'time',
        time: {
          unit: 'day',
          
        }
      },
      'y-axis-0': {
        position: 'left',
      },
      // 'y-axis-1': {
      //   position: 'right',
      //   grid: {
      //     color: 'rgba(255,0,0,0.3)',
      //   },
      //   ticks: {
      //     color: 'red',
      //   },
      // },
    },

    plugins: {
      legend: { display: true },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         position: 'center',
      //         enabled: true,
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold',
      //         },
      //       },
      //     },
      //   ],
      // },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}
