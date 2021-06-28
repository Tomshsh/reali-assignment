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
export class DashResolver implements Resolve<Customer[] | boolean> {

  constructor(private cs: CustomersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer[] | boolean> {
    if (this.cs.getCustomers().length) {
      return of(this.cs.getCustomers())
    }
    this.router.navigate(['edit'])
    return of(false)
  }
}
