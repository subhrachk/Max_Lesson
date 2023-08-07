import { Component } from "@angular/core";

@Component({
    selector : 'app-servers',
    templateUrl : './app.servers.html',
    styleUrls : ['./app.servers.css']
})

export class Servers {
    serverType : 'server' | 'blueprint' | null = null;
    Servers :{serverName : string, serverContent : string , serverType : 'server' | 'blueprint'}[] = [
        {serverName : 'Test Server' , serverContent : 'Test Content' , serverType : 'server' },
        {serverName : 'Test blueprintServer' , serverContent : 'Test blueprintServer' , serverType : 'blueprint' },
    ];

    onServerAdded(data : {server : {
        newserverName : string, 
        newserverContent : string, 
        newserverType : 'server' | 'blueprint'}}) {
        this.Servers.push(
            {serverName : data.server.newserverName , 
            serverContent : data.server.newserverContent , 
            serverType : data.server.newserverType });
    }
    // onServerAdded(data : any) {
    //     console.log(data.server);
    // }
}