import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './smartflow/dashboard/components/dashboard/dashboard.component';
import { MachineCardComponent } from './smartflow/machines/components/machine-card/machine-card.component';
import { MachineListComponent } from './smartflow/machines/components/machine-list/machine-list.component';
import { SideNavigationBarComponent } from './smartflow/public/components/side-navigation-bar/side-navigation-bar.component';
import { ToolbarComponent } from './smartflow/public/components/toolbar/toolbar.component';
import { HomeComponent } from './smartflow/public/pages/home/home.component';
import { WorkerDetailsComponent } from './smartflow/workers-details/components/worker-details/worker-details.component';
import { WorkerEditDetailsComponent } from './smartflow/workers-details/components/worker-edit-details/worker-edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MachineCardComponent,
    MachineListComponent,
    SideNavigationBarComponent,
    ToolbarComponent,
    HomeComponent,
    WorkerDetailsComponent,
    WorkerEditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
