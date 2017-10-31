import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { LinechartComponent } from '../chars/linechart/linechart.component';
import { SimplechartComponent } from '../chars/simplechart/simplechart.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ 
    LinechartComponent,
    SimplechartComponent,
    DashboardComponent
   ]
})
export class DashboardModule { }
