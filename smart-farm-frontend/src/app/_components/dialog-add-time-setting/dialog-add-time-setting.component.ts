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
      hour: 0,
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

  constructor(
    public dialogRef: MatDialogRef<DialogAddTimeSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
