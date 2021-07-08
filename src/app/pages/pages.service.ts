import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerInfoModel } from './model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private userList = new BehaviorSubject<any[]>([]);

  serviceUserList$ = this.userList.asObservable();
  constructor() {

  }

  public setUser(userList: CustomerInfoModel[]) {
    this.userList.next(userList) 
  }








}
