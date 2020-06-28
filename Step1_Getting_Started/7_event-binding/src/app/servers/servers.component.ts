import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus: string = 'No server was created!';
  serverName: string = "Testserver";

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  // onUpdateServerName(event: any) {
  //   console.log(event);

  //   this.serverName = event.target.value;
  // }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
