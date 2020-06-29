import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})

export class UserNameComponent {
  username: string = "";
  isEmptyUser: boolean = true;

  onResetUser(): void {
    if (this.username === "") {
      this.isEmptyUser = true;
    } else {
      this.isEmptyUser = false;
    }
  }
}
