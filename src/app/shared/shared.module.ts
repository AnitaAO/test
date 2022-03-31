import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardFooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardFooterComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
