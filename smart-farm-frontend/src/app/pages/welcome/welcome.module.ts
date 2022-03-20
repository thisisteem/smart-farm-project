import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { MaterialModule } from '../material-module';

@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, NzCardModule, MaterialModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
