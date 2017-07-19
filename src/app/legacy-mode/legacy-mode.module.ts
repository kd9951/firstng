import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LegacyModeComponent } from './legacy-mode.component';
import {  LegacyModeRoutingModule } from './legacy-mode-routing.module';

@NgModule({
  imports: [
    LegacyModeRoutingModule
  ],
  declarations: [  LegacyModeComponent ]
})
export class  LegacyModeModule { }
