import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Customer } from './Customer';
import { CustomersService } from './services/customers/customers.service';

@Injectable({
  providedIn: 'root'
})
export class EditorResolver implements Resolve<Customer> {

  constructor(private cs: CustomersService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    const id = route.paramMap.get('id')

    if(id) return this.cs.getCustomer(id).pipe(
      take(1),
      tap(c => c ?? this.router.navigate(['edit/add']))
    )

    return of({
      address: "", age: 0, firstName: "", lastName:"", phone:""
    }).pipe(take(1))
  }
}
