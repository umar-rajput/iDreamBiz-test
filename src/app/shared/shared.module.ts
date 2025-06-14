import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ButtonComponent } from './button/button.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardMainComponent,
    DashboardHeaderComponent,
    ButtonComponent,
    BarChartComponent,
    DoughnutChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent,
    DashboardMainComponent,
    DashboardHeaderComponent,
    ButtonComponent,
    BarChartComponent,
    DoughnutChartComponent,
    TableComponent,
  ]
})
export class SharedModule { }
