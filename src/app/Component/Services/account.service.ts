import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from './loging.service';

@Injectable({ providedIn: "root" })

export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }
    onAccountAdded(newAccount: { name: string, status: string }) {
        //console.log(newAccount); 
        this.accounts.push(newAccount);
        this.loggingService.logStatusChange(newAccount.status);
    }

    onStatusChanged(updateInfo: { id: number, newStatus: string }) {
        //console.log(updateInfo); 
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatusChange(updateInfo.newStatus);
    }
}
