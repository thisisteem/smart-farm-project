import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  temperature: number = 26;
  humidity: number = 87;
  dirtMoisture: number = 63;
  windSpeed: number = 367;

  relays = [
    {
      index: 1,
      name: 'รีเลย์ 1',
      status: 'ON',
    },
    {
      index: 2,
      name: 'รีเลย์ 2',
      status: 'OFF',
    },
    {
      index: 3,
      name: 'รีเลย์ 3',
      status: 'OFF',
    },
    {
      index: 4,
      name: 'รีเลย์ 4',
      status: 'ON',
    },
  ];

  constructor() {}

  ngOnInit() {}

  toggleSwitch(name: String, status: String, index: number) {
    console.log(name, status, index);
    if (status == 'ON') {
      this.relays[index - 1].status = 'OFF';
    } else {
      this.relays[index - 1].status = 'ON';
    }

    console.log(this.relays);
  }
}
