import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
    selector : 'app-newserver',
    templateUrl : './app.newserver.html',
    styleUrls : ['./app.newserver.css']
})

export class NewServer {
    @ViewChild('newserverContent', { static: true })
    newserverContent : ElementRef | null = null;

    @Output() serverCreated = new EventEmitter<{server : {
        newserverName : string, 
        newserverContent : string, 
        newserverType : 'server' | 'blueprint'}}>();
    serverName : string = '';
    serverContent : string = '';


    addNewServer(newServerName : HTMLInputElement) {
        this.serverCreated.emit({
        server : {  newserverName : newServerName.value,   //this.serverName, 
                    newserverContent : this.newserverContent?.nativeElement.value ,  //this.serverContent, 
                    newserverType : 'server' }});
    }
    addNewBluePrint(newServerName : HTMLInputElement) {
        this.serverCreated.emit({
        server : {newserverName : newServerName.value,   //this.serverName, 
                    newserverContent : this.newserverContent?.nativeElement.value, //this.serverContent, 
                    newserverType : 'blueprint' }})
    }

}