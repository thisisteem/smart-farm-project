import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType, _adapters } from 'chart.js';
import { format, compareAsc } from 'date-fns';
import 'chartjs-adapter-date-fns';
import { th } from 'date-fns/locale';

const dates = [
  '2022-01-01T07:01:36.386Z',
  '2022-01-02T02:01:36.386Z',
  '2022-01-03T04:01:36.386Z',
  '2022-01-04T12:01:36.386Z',
  '2022-01-05T16:01:36.386Z',
  '2022-01-06T12:01:36.386Z',
  '2022-01-07T12:01:36.386Z',
];
var data_temp = [25.0, 26.0, 28, 24, 23, 25, 26]; // wait for dataset
var humidity = [28, 48, 40, 19, 86, 27, 63]; // wait for dataset
var dirt_humid = [48, 39, 40, 100, 15, 26, 87]; // wait for dataset
var i: number;
var array_labels: Date[] = [];

for (i = 0; i < dates.length; i++) {
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
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#fbc658',
        fill: 'origin',
      },
      {
        data: humidity,
        label: 'ความชื้น (%)',
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#51CACF',
        fill: 'origin',
      },
      {
        data: dirt_humid,
        label: 'ความชื้นดิน (%)',
        borderColor: '#6bd098',
        backgroundColor: 'transparent',
        pointBorderColor: '#6bd098',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#6bd098',
        fill: 'origin',
      },
    ],
    labels: array_labels,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    locale: 'th-TH',
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      'y-axis-0': {
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';

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
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }
}
