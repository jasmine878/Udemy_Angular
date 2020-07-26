import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onIntervalFired(firedNum: number) {
    if (firedNum % 2) this.odds.push(firedNum);
    else this.evens.push(firedNum);
  }

}
