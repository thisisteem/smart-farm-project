import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-temp-setting',
  templateUrl: './dialog-add-temp-setting.component.html',
  styleUrls: ['./dialog-add-temp-setting.component.scss'],
})
export class DialogAddTempSettingComponent implements OnInit {
  setDevice = {
    temperature: '',
    duration: '',
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
    public dialogRef: MatDialogRef<DialogAddTempSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
