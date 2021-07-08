import { createAction, props } from '@ngrx/store';
import { CustomerInfoModel } from '../../model/customer.model';


export const addCustomer = createAction(

  '[Customer] Add Customer',

  (customer: CustomerInfoModel) => ({customer})

);