import { Injectable } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { Store, select } from '@ngrx/store'
import { addCustomer, editCustomer, removeCustomer } from '../../state/customer.actions'
import { selectCustomerByPhone, selectCustomers } from '../../state/customer.selectors'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private _customers$ = new BehaviorSubject<Customer[]>([])
  public customers$ = this._customers$.asObservable()

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectCustomers)).subscribe(c => {this._customers$.next(c)})
  }

  getCustomer(phone: string) {
    return this.store.pipe(take(1), select(selectCustomerByPhone({ phone })))
  }

  addNew(customer: Customer) {
    this.store.dispatch(addCustomer({ customer }))
  }

  edit(phone: string, newCustomer: Customer) {
    this.store.dispatch(editCustomer({ phone, newCustomer }))
  }

  delete(phone: string) {
    this.store.dispatch(removeCustomer({ phone }))
  }
}
