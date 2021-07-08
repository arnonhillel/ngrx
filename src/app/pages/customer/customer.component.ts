import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerInfoModel } from '../model/customer.model';
import { PagesService } from '../pages.service';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/reducer/customer.reducer';
import { addCustomer } from '../store/action/customer.actions';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public allCustomer = [];
  public addCustomerFormGroup: FormGroup
  public customer: CustomerInfoModel = this.resetCustomer()

  constructor(private fb: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
    private store: Store<CustomerState>) {
    this.pagesService.serviceUserList$.subscribe(res => {
      this.allCustomer = res
      console.log(this.allCustomer);
      
    })
  }


  ngOnInit(): void {


    this.addCustomerFormGroup = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'age': [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      'phoneNumber': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
    }
    );

    this.onChanges();
  }

  public onChanges(): void {
    this.addCustomerFormGroup.valueChanges.subscribe(() => {
      this.customer.first_name = this.addCustomerFormGroup.value['firstName']
      this.customer.last_name = this.addCustomerFormGroup.value['lastName']
      this.customer.age = this.addCustomerFormGroup.value['age']
      this.customer.phone = this.addCustomerFormGroup.value['phoneNumber']
      this.customer.address = this.addCustomerFormGroup.value['address']
    });
  }

  addCustomer() {
    this.customer.id = uuid.v4();
    this.allCustomer.push(this.customer)
    this.pagesService.setUser(this.allCustomer)
    // this.store.dispatch(addCustomer(this.customer));
    // this.addCustomerFormGroup.reset();
  }

  editCustomer(customer: CustomerInfoModel) {

  }

  deleteCustomer(customer: CustomerInfoModel) {

  }

  dashboard() {
    this.router.navigate(['/dashboard'])
  }


  resetCustomer(): CustomerInfoModel {
    return {
      "id": "",
      "first_name": "",
      "last_name": "",
      "age": -1,
      "phone": "",
      "address": "",
    }
  }

}
