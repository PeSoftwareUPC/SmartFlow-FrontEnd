import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './smartflow/public/pages/home/home.component';
import { DashboardComponent } from './smartflow/dashboard/components/dashboard/dashboard.component';
import { MachineListComponent } from './smartflow/machines/components/machine-list/machine-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'machines', component: MachineListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
