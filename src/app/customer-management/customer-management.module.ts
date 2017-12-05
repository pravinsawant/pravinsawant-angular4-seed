import { NgModule } from '@angular/core';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { CustomerFilterComponent } from './customer-listing/customer-filter.component';
import { CustomerDataComponent } from './customer-listing/customer-data.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [CustomerListingComponent,
    CustomerFilterComponent, CustomerDataComponent,
    AddCustomerComponent],
  providers: [],
})
export class CustomerManagementModule { }
