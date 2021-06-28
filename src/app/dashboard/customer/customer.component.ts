import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private cs: CustomersService) { }

  @Input() customer!: Customer

  ngOnInit(): void {
    console.log(this.customer)
  }

  deleteCustomer(){
    this.cs.delete(this.customer.phone)
  }
}
