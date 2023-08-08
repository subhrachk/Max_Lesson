import { Injectable } from "@angular/core";

@Injectable({providedIn : "root"})

export class LoggingService { 
    logStatusChange(status : string | null) { 
    console.log('Server Status Changed, New Status ' + status); 
    } 
 } 