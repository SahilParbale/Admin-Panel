import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatCardComponent } from './components/dashboard/stat-card/stat-card.component';
import { AnalyticsChartComponent } from './components/dashboard/analytics-chart/analytics-chart.component';
import { PerformanceChartComponent } from './components/dashboard/performance-chart/performance-chart.component';
import { RevenueChartComponent } from './components/dashboard/revenue-chart/revenue-chart.component';
import { OrdersTableComponent } from './components/dashboard/orders-table/orders-table.component';

@NgModule({
  declarations: [
    App,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    StatCardComponent,
    AnalyticsChartComponent,
    PerformanceChartComponent,
    RevenueChartComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [App]
})
export class AppModule { }
