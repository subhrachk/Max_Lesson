import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  //@Input() account: {name: string, status: string} = {name : '', status : ''};
  //@Input() id: number = 0;

  accounts : {name: string, status: string}[] = [];

 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService : AccountService) {
    this.accounts = this.accountService.accounts;
  }

  onSetTo(id:number,status: string) {
    this.accountService.onStatusChanged({id:id, newStatus : status});
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
  }
}
