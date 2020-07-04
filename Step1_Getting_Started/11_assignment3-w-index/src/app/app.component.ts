import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMessage = true;
  count = 0;
  messageCount = [];

  onDisplayResults() {
    this.showMessage = !this.showMessage;
    this.count++;
    this.messageCount.push(this.count);
    // console.log(this.count);
    // console.log(this.messageCount);
  }
}
