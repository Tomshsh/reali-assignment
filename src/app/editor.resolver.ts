import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from './Customer';
import { CustomersService } from './services/customers/customers.service';

@Injectable({
  providedIn: 'root'
})
export class EditorResolver implements Resolve<Customer> {

  constructor(private cs: CustomersService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Customer {
    const id = state.url.split('/')[2]

    if(id) return this.cs.getCustomer(id)

    return {
      address: "", age: 0, firstName: "", lastName:"", phone:""
    }
  }
}
