import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserMasterTableComponent } from './user-master-table/user-master-table.component';
import { UserComplaintsTableComponent } from './user-complaints-table/user-complaints-table.component';
import { RiderMasterTableComponent } from './rider-master-table/rider-master-table.component';
import { RiderEarningsTableComponent } from './rider-earnings-table/rider-earnings-table.component';
import { UserGrowthTrendChartComponent } from './user-growth-trend-chart/user-growth-trend-chart.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserManagementRoutingModule
    ],
    providers: [
        provideCharts(withDefaultRegisterables())
    ]
})
export class UserManagementModule { }
