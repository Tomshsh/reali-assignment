import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject<boolean>(1)

  constructor(
    private cs: CustomersService,
    private router: Router
  ) { }

  customers$!: Observable<Customer[]>

  ngOnInit(): void {
    this.customers$ = this.cs.customers$

    this.customers$.pipe(takeUntil(this.destroy$))
      .subscribe(customers => {if(!customers.length) this.router.navigate(['../edit/add'])})
  }

  ngOnDestroy(){
    this.destroy$.next(true)
    this.destroy$.complete()
  }

}
