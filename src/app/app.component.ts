import { Component, OnInit } from '@angular/core';
import { AccountService } from './Component/Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts : {name: string, status: string}[] = [];

  constructor(
    private accounService : AccountService
  ) {
    this.accounts = this.accounService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    //this.accounts.push(newAccount);
    this.accounService.onAccountAdded(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    //this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.accounService.onStatusChanged(updateInfo);
  }
}
