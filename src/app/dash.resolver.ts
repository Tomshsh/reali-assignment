import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {  Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CustomersService } from './services/customers/customers.service';

@Injectable({
  providedIn: 'root'
})
export class DashResolver {

  constructor(private cs: CustomersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.cs.customers$.pipe(
      take(1),
      map(customers => {
        if (customers.length) { return true }
        this.router.navigate(['../edit/add'])
        return false
      })
    )
  }
}
