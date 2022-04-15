import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TempSettingService } from 'src/app/service/temp-setting.service';
import { TimeSettingService } from 'src/app/service/time-setting.service';
import Swal from 'sweetalert2';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private timeSettingService: TimeSettingService,
    private tempSettingService: TempSettingService
  ) {}

  ngOnInit(): void {
    // this.dataSourceTime = this.data.savedTime;
    // this.dataSourceTemp = this.data.savedTemp;
    this.queryData();
  }

  queryData() {
    this.timeSettingService.findAll().subscribe((res) => {
      this.dataSourceTime = res;
      console.log('dataSourceTime >>>', this.dataSourceTime);
    });

    this.tempSettingService.findAll().subscribe((res) => {
      this.dataSourceTemp = res;
      console.log('dataSourceTemp >>>', this.dataSourceTemp);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(type: String, id: String) {
    Swal.fire({
      title: 'คุณแน่ใจหรือไม่ที่จะลบการตั้งค่านี้?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.value) {
        if (type == 'time') {
          this.timeSettingService.delete(id).subscribe((res) => {
            this.queryData();
            Swal.fire({
              title: 'ลบสำเร็จ!',
              icon: 'success',
              confirmButtonText: 'ตกลง',
            });
          });
        } else {
          this.tempSettingService.delete(id).subscribe((res) => {
            this.queryData();
            Swal.fire({
              title: 'ลบสำเร็จ!',
              icon: 'success',
              confirmButtonText: 'ตกลง',
            });
          });
        }
      }
    });
  }
}
