import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashResolver } from '../dash.resolver';
import {MatGridListModule} from '@angular/material/grid-list';
import { UiModule } from '../ui/ui.module';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: {customers: DashResolver}
  }
]

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    UiModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: []
})
export class DashboardModule { }
