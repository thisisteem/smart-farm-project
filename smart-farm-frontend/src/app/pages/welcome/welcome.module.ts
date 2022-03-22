import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { MaterialModule } from '../material-module';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { DialogAddTimeSettingComponent } from '../../_components/dialog-add-time-setting/dialog-add-time-setting.component';
import { DialogAddTempSettingComponent } from '../../_components/dialog-add-temp-setting/dialog-add-temp-setting.component';
import { DialogSettingListComponent } from '../../_components/dialog-setting-list/dialog-setting-list.component';
import { DialogSystemSettingComponent } from '../../_components/dialog-system-setting/dialog-system-setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzCardModule,
    MaterialModule,
    NgChartsModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [
    WelcomeComponent,
    ChartComponent,
    DialogAddTimeSettingComponent,
    DialogAddTempSettingComponent,
    DialogSettingListComponent,
    DialogSystemSettingComponent,
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
