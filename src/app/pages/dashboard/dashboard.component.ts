import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerInfoModel } from '../model/customer.model';
import { PagesService } from '../pages.service';
import { CustomerState } from '../store/reducer/customer.reducer';
import { selectCustomers } from '../store/selector/Customer.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers$: Observable<CustomerInfoModel[]>;
  public allCustomer = [];
  constructor(private router: Router, private pagesService: PagesService,private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
    // this.customers$.subscribe(res=>{
    //   this.allCustomer = res
    // })
    this.pagesService.serviceUserList$.subscribe(res=>{
      this.allCustomer = res
    })
   }

  ngOnInit(): void {
  }
  addNew(){
    this.router.navigate(['/customer'])
  }
}
