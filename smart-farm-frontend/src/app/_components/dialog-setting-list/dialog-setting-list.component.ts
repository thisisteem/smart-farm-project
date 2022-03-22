import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-setting-list',
  templateUrl: './dialog-setting-list.component.html',
  styleUrls: ['./dialog-setting-list.component.scss'],
})
export class DialogSettingListComponent implements OnInit {
  displayedColumnsTemp: string[] = [
    'temperature',
    'duration',
    'relayNumber',
    'tool',
  ];

  displayedColumnsTime: string[] = [
    'day',
    'timestamp',
    'duration',
    'relayNumber',
    'tool',
  ];

  dataSourceTemp: any;
  dataSourceTime: any;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dataSourceTemp = this.data.savedTemp;
    this.dataSourceTime = this.data.savedTime;

    console.log(this.dataSourceTime);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    console.log('deleted');
  }
}
