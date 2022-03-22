import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSettingListComponent } from 'src/app/_components/dialog-setting-list/dialog-setting-list.component';
import { DialogAddTempSettingComponent } from 'src/app/_components/dialog-add-temp-setting/dialog-add-temp-setting.component';
import { DialogSystemSettingComponent } from 'src/app/_components/dialog-system-setting/dialog-system-setting.component';
import { DialogAddTimeSettingComponent } from 'src/app/_components/dialog-add-time-setting/dialog-add-time-setting.component';
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
      status: true,
    },
    {
      index: 2,
      name: 'รีเลย์ 2',
      status: false,
    },
    {
      index: 3,
      name: 'รีเลย์ 3',
      status: false,
    },
    {
      index: 4,
      name: 'รีเลย์ 4',
      status: true,
    },
  ];

  savedTemp = [
    {
      temperature: 35,
      duration: 10,
      relayNumber: 1,
    },
    {
      temperature: 51,
      duration: 10,
      relayNumber: 1,
    },
    {
      temperature: 50,
      duration: 10,
      relayNumber: 2,
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // this.doSystemSetting();
  }

  toggleSwitch(name: String, status: boolean, index: number) {
    // console.log(name, status, index);

    this.relays[index - 1].status = !this.relays[index - 1].status;
  }

  test() {}

  doTimeSet() {
    const dialogRef = this.dialog.open(DialogAddTimeSettingComponent, {
      width: '30%',
      // data: {
      //   relays: relayInfo,
      // },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('result >>>', result);
      }
    });
  }

  doDeviceSetting() {
    const dialogRef = this.dialog.open(DialogAddTempSettingComponent, {
      width: '30%',
      // data: {
      //   relays: relayInfo,
      // },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('result >>>', result);
      }
    });
  }

  doDeviceList() {
    const dialogRef = this.dialog.open(DialogSettingListComponent, {
      width: '30%',
      data: {
        savedTemp: this.savedTemp,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('result >>>', result);
      }
    });
  }

  doSystemSetting() {
    const dialogRef = this.dialog.open(DialogSystemSettingComponent, {
      width: '30%',
      // data: {
      //   savedTemp: this.savedTemp,
      // },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('result >>>', result);
      }
    });
  }
}
