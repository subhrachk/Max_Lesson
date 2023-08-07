import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-servercomponent',
    templateUrl : './app.servercomponent.html',
    styleUrls : ['./app.servercomponent.css']
})

export class ServerComponent {
    //serverName : string = '';
    //serverContent : string = '';
    //serverType : 'server' | 'blueprint';
    @Input() Server :{serverName : string, serverContent : string , serverType : string}  | null = null;



}