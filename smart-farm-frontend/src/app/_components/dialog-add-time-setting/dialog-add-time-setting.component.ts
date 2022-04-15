import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-time-setting',
  templateUrl: './dialog-add-time-setting.component.html',
  styleUrls: ['./dialog-add-time-setting.component.scss'],
})
export class DialogAddTimeSettingComponent implements OnInit {
  setTime = {
    day: '',
    duration: '',
    time: {
      hour: 7,
      minute: 0,
    },
    relays: [
      {
        index: 1,
        name: 'รีเลย์ 1',
        status: false,
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
        status: false,
      },
    ],
  };

  private resultTimeSetting: any = {};

  constructor(
    public dialogRef: MatDialogRef<DialogAddTimeSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.resultTimeSetting = {
      day: `${this.setTime.day}`,
      duration: `${this.setTime.duration}`,
      startTime_hour: `${this.setTime.time.hour}`,
      startTime_minute: `${this.setTime.time.minute}`,
      relay_1: this.setTime.relays[0].status ? '1' : '0',
      relay_2: this.setTime.relays[1].status ? '1' : '0',
      relay_3: this.setTime.relays[2].status ? '1' : '0',
      relay_4: this.setTime.relays[3].status ? '1' : '0',
    };
    this.dialogRef.close(this.resultTimeSetting);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
