import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMessage = true;
  messageCount = [];

  onDisplayResults() {
    this.showMessage = !this.showMessage;
    this.messageCount.push(new Date());
  }
}
