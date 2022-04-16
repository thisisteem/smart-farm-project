import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSettingListComponent } from 'src/app/_components/dialog-setting-list/dialog-setting-list.component';
import { DialogAddTempSettingComponent } from 'src/app/_components/dialog-add-temp-setting/dialog-add-temp-setting.component';
import { DialogSystemSettingComponent } from 'src/app/_components/dialog-system-setting/dialog-system-setting.component';
import { DialogAddTimeSettingComponent } from 'src/app/_components/dialog-add-time-setting/dialog-add-time-setting.component';
import { UserService } from 'src/app/service/user.service';
import { TimeSettingService } from 'src/app/service/time-setting.service';
import { TempSettingService } from 'src/app/service/temp-setting.service';
import { SystemSettingService } from 'src/app/service/system-setting.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  temperature: number = 26;
  humidity: number = 87;
  dirtMoisture: number = 63;

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

  private resultTempSetting: any = {};

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private timeSettingService: TimeSettingService,
    private tempSettingService: TempSettingService,
    private systemSettingService: SystemSettingService
  ) {}

  ngOnInit() {
    // this.doSystemSetting();
  }

  toggleSwitch(name: String, status: boolean, index: number) {
    // console.log(name, status, index);

    this.relays[index - 1].status = !this.relays[index - 1].status;
  }

  test() {}

  addTimeSetting() {
    const dialogRef = this.dialog.open(DialogAddTimeSettingComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log('result >>>', result);

        this.timeSettingService.create(result).subscribe((res) => {
          // console.log(res);
          Swal.fire({
            title: 'เพิ่มการตั้งค่าเสร็จสิ้น!',
            icon: 'success',
            confirmButtonText: 'ตกลง',
          });
        });
      }
    });
  }

  addTempSetting() {
    const dialogRef = this.dialog.open(DialogAddTempSettingComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log('result >>>', result);

        this.tempSettingService.create(result).subscribe((res) => {
          // console.log(res);
          Swal.fire({
            title: 'เพิ่มการตั้งค่าเสร็จสิ้น!',
            icon: 'success',
            confirmButtonText: 'ตกลง',
          });
        });
      }
    });
  }

  settingList() {
    const dialogRef = this.dialog.open(DialogSettingListComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log('result >>>', result);
      }
    });
  }

  systemSetting() {
    const dialogRef = this.dialog.open(DialogSystemSettingComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log('result >>>', result);

        this.systemSettingService.update(result).subscribe((res) => {
          // console.log(res);
          Swal.fire({
            title: 'บันทึกเสร็จสิ้น!',
            icon: 'success',
            confirmButtonText: 'ตกลง',
          });
        });
      }
    });
  }

  onUpload() {
    this.userService.findAllUser().subscribe((res) => {
      // console.log(res);
    });
  }
}
