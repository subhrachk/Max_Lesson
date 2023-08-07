import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Servers } from './Component/Servers/app.servers';
import { ServerComponent } from './Component/ServerComponent/app.servercomponent';
import { NewServer } from './Component/NewServer/app.newserver';

@NgModule({
  declarations: [
    AppComponent,
    Servers,
    ServerComponent,
    NewServer
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
