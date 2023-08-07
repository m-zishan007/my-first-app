import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit 
{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= 'Test server';
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;  
    },2000);
  }

  onCreateServer(){
    this.serverCreationStatus ='Server was created! name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  ngOnInit(){}
}
