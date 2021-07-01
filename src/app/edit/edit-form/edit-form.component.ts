import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cs: CustomersService,
    private router: Router
  ) { }

  formGroup!: FormGroup
  @Output() formSubmit: EventEmitter<Customer> = new EventEmitter();
  customer!: Customer

  ngOnInit(): void {


    this.route.data.subscribe(
      (data) => {
        const customer: Customer = data.customer
        this.customer = customer
        this.formGroup = this.fb.group({
          firstName: [customer.firstName],
          lastName: [customer.lastName],
          phone: [customer.phone],
          age: [customer.age],
          address: [customer.address]
        })
      }
    )

  }

  onSubmit() {
    if (this.customer.phone) { this.cs.edit(this.customer.phone, this.formGroup.value) }
    else { this.cs.addNew(this.formGroup.value) }

    this.router.navigate(["../dashboard"])
  }

}
