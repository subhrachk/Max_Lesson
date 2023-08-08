import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Servers } from './Component/Servers/app.servers';
import { ServerComponent } from './Component/Servers/ServerComponent/app.servercomponent';
import { NewServer } from './Component/Servers/NewServer/app.newserver';
import { AccountComponent } from './Component/Account/account.component';
import { NewAccountComponent } from './Component/Account/NewAccount/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    Servers,
    ServerComponent,
    NewServer,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
