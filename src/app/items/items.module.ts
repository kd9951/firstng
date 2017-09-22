import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';

import { SearchboxComponent } from '../searchbox/searchbox.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
    ,FormsModule
  ],
  declarations: [
    ItemsComponent,
    SearchboxComponent
  ]
})
export class ItemsModule { }
