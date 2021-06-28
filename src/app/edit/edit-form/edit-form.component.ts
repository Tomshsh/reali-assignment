import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private cs: CustomersService
  ) { }

  formGroup!: FormGroup
  @Output() formSubmit: EventEmitter<Customer> = new EventEmitter();
  customer!: Customer
  controls: any = []

  ngOnInit(): void {


    this.route.data.subscribe(
      (data) => {
        const customer: Customer = data.customer
        this.customer = customer
        this.formGroup = this.fb.group(this.customer)
        this.controls = Object.keys(this.customer).map(c => {
          return ({ name: c })
        })
      }
    )

  }

  onSubmit() {
    this.cs.addNew(this.formGroup.value)
  }

}
