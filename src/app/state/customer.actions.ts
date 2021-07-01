import { createAction, props } from '@ngrx/store'
import { Customer } from '../Customer'

export const addCustomer = createAction(
  '[Customers] Add Customer',
  props<{customer: Customer}>()
)

export const removeCustomer = createAction(
  '[Customers] Remove Customer',
  props<{ phone: string }>()
)

export const editCustomer = createAction(
  '[Customers] Edit Customer',
  props<{phone: string, newCustomer: Customer}>()
)
