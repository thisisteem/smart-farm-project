import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { MaterialModule } from '../material-module';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzCardModule,
    MaterialModule,
    NgChartsModule,
  ],
  declarations: [WelcomeComponent, ChartComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
