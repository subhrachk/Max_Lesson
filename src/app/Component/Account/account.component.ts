import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accounts : {name: string, status: string}[] = [];

  constructor(private accountService : AccountService) {
    this.accounts = this.accountService.accounts;
  }

  onSetTo(id:number,status: string) {
    this.accountService.onStatusChanged({id:id, newStatus : status});
  }
}
