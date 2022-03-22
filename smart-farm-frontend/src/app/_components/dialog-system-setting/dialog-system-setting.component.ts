import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-system-setting',
  templateUrl: './dialog-system-setting.component.html',
  styleUrls: ['./dialog-system-setting.component.scss'],
})
export class DialogSystemSettingComponent implements OnInit {
  setSetting = {
    wifiName: '',
    wifiPassword: '',
    plantCategory: '',
    boardNumber: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogSystemSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
