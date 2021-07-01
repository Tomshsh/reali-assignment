import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AppState } from './app.state'
import { Customer } from '../Customer'

export const selectCustomers = createSelector(
  (state: AppState) => state.customers,
  (customers: Array<Customer>) =>  customers
)

export const selectCustomerByPhone = (props: {phone:string}) => createSelector(
  selectCustomers,
  (customers: Array<Customer>) => {
    const index = customers.findIndex(c => c.phone == props.phone)
    return customers[index]
  }
)
