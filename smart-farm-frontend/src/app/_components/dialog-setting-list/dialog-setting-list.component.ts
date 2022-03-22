import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface savedTempElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dialog-setting-list',
  templateUrl: './dialog-setting-list.component.html',
  styleUrls: ['./dialog-setting-list.component.scss'],
})
export class DialogSettingListComponent implements OnInit {
  displayedColumns: string[] = [
    'temperature',
    'duration',
    'relayNumber',
    'tool',
  ];
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dataSource = this.data.savedTemp;
    console.log(this.dataSource);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    console.log('deleted');
  }
}
