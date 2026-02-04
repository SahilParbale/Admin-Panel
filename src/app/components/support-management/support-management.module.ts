import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupportManagementComponent } from './support';

const routes: Routes = [
    { path: '', component: SupportManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SupportManagementComponent,
        RouterModule.forChild(routes)
    ]
})
export class SupportManagementModule { }
