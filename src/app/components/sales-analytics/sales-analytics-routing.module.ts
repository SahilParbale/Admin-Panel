import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesAnalyticsComponent } from './sales-analytics.component';

const routes: Routes = [
    { path: '', component: SalesAnalyticsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesAnalyticsRoutingModule { }
