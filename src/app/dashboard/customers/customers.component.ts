import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(
    private cs: CustomersService,
    private route: ActivatedRoute
  ) { }

  customers$!: Observable<Customer[]>

  ngOnInit(): void {
    this.customers$ = this.route.data.pipe(
      map(data => {
      const customers: Customer[] = data.customers
      return customers
    }))
  }

}
