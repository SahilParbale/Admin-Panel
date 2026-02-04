import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsManagementComponent } from './settings';

const routes: Routes = [
    { path: '', component: SettingsManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SettingsManagementComponent,
        RouterModule.forChild(routes)
    ]
})
export class SettingsManagementModule { }
