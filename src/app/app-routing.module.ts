import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondDashboardComponent } from './second-dashboard/second-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'second-dashboard', component: SecondDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
