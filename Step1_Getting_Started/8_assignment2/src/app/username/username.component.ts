import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})

export class UserNameComponent {
  username: string = "";
  emptyUser: boolean = true;

  onResetUser(): void {
    if (this.username === "") {
      this.emptyUser = true;
    } else {
      this.emptyUser = false;
    }
  }
}
