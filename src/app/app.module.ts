import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

import { LegacyModeModule } from './legacy-mode/legacy-mode.module';
import { ItemsModule } from './items/items.module';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// import { SearchboxComponent } from './searchbox/searchbox.component';
import { GoodsService } from './goods.service';
import { StatisticsService } from './statistics.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    LegacyModeModule,
    ItemsModule
    
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
  //  SearchboxComponent,
    AsideToggleDirective,
  ],
  providers: [
     { provide: LocationStrategy, useClass: HashLocationStrategy }
    ,{ provide: GoodsService, useClass: GoodsService }
    ,{ provide: StatisticsService, useClass: StatisticsService }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
