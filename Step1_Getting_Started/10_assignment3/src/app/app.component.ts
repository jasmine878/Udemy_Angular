import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowButtonClick = false;

  showMessage() {
    this.allowButtonClick = true;
  }
}
