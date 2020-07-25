import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count: number = 1;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(function() {
      console.log(this.count);
      this.count++;
    }.bind(this), 3000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
