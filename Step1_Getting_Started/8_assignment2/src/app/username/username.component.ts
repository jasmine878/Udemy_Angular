import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})

export class UserNameComponent {
  username: string = "";

  // onResetUser(): void {
  //   this.username = "";
  // }
}
