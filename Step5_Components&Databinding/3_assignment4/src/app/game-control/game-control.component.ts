import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  count: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(function() {
      console.log(this.count);
      this.intervalFired.emit(this.count);
      this.count++;
    }.bind(this), 3000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
