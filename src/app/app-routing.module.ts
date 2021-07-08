import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'customer',  component: CustomerComponent  },
  { path: 'dashboard',  component: DashboardComponent  },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: '**', redirectTo: 'customer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
