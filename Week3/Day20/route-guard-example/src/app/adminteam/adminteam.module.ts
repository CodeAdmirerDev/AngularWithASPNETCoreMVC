import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminteamRoutingModule } from './adminteam-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminteamRoutingModule
  ]
})
export class AdminteamModule { }
