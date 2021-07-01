import { createReducer, on, Action } from '@ngrx/store'
import { Customer } from '../Customer'
import { addCustomer, editCustomer, removeCustomer } from './customer.actions'

export const initialState: Array<Customer> = []

export const customerReducer = createReducer(
  initialState,
  on(addCustomer, (state, { customer }) => [...state, customer]),
  on(removeCustomer, (state, { phone }) => findOneAndUpdate(state, phone)),
  on(editCustomer, (state, { phone, newCustomer }) => findOneAndUpdate(state, phone, newCustomer))
)

function findOneAndUpdate(state: Array<Customer>, phone: string, newCustomer?: Customer) {
  const index = state.findIndex(c => c.phone == phone)
  const newState = [...state]
  newCustomer ? newState.splice(index, 1, newCustomer) : newState.splice(index, 1)
  return newState
}
