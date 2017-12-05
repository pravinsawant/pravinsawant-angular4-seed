import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const customerMgtmtRoutes: Routes = [
  { path: 'customer-listing', component : CustomerListingComponent },
  { path: 'new-customer', component : AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(customerMgtmtRoutes),],
  exports: [],
  declarations: [],
  providers: [],
})
export class CustomerManagementRoutingModule { }
