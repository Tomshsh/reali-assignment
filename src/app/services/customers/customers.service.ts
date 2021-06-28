import { Injectable } from '@angular/core';
import { Customer } from 'src/app/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customers: Customer[] = [{
    address:"sdjfb",
    age:38,
    firstName:"dshbf",
    lastName:"jb",
    phone:"ljfdhkj"
  }]

  constructor() { }

  getCustomers() {
    return this.customers
  }

  getCustomer(phone: string){
    const index = this.customers.findIndex(c => c.phone == phone)
    return this.customers[index]
  }

  addNew(customer: Customer) {
    this.customers.push(customer)
  }

  edit(phone: string, newCustomer: Customer) {
    const index = this.customers.findIndex(c => c.phone == phone)
    this.customers[index] = newCustomer
    return this.customers
  }

  delete(phone: string) {
    const index = this.customers.findIndex(c => c.phone == phone)
    this.customers.splice(index, 1)
    return this.customers
  }
}
