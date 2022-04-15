import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-temp-setting',
  templateUrl: './dialog-add-temp-setting.component.html',
  styleUrls: ['./dialog-add-temp-setting.component.scss'],
})
export class DialogAddTempSettingComponent implements OnInit {
  setTemp = {
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

  private resultTempSetting: any = {};

  constructor(
    public dialogRef: MatDialogRef<DialogAddTempSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.resultTempSetting = {
      temperature: `${this.setTemp.temperature}`,
      duration: `${this.setTemp.duration}`,
      relay_1: this.setTemp.relays[0].status ? '1' : '0',
      relay_2: this.setTemp.relays[1].status ? '1' : '0',
      relay_3: this.setTemp.relays[2].status ? '1' : '0',
      relay_4: this.setTemp.relays[3].status ? '1' : '0',
    };
    this.dialogRef.close(this.resultTempSetting);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
