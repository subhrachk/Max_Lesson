import { Component } from "@angular/core";

@Component({
    selector : 'app-servers',
    templateUrl : './app.servers.html',
    styleUrls : ['./app.servers.css']
})

export class Servers {
    serverName : string = '';
    serverContent : string = '';
    serverType : 'server' | 'blueprint';
    Servers :{serverName : string, serverContent : string , serverType : 'server' | 'blueprint'}[] = [
        {serverName : 'Test Server' , serverContent : 'Test Content' , serverType : 'server' },
        {serverName : 'Test blueprintServer' , serverContent : 'Test blueprintServer' , serverType : 'blueprint' },
    ];

    addServer() {
        this.Servers.push(
            {serverName : this.serverName , 
            serverContent : this.serverContent , 
            serverType : 'server' });
    }
    addBluePrint() {
        
        this.Servers.push(
            {serverName : this.serverName , 
            serverContent : this.serverContent , 
            serverType : 'blueprint' });
    }
}