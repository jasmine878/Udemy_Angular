import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer(nameInput: HTMLInputElement) {
  //   console.log(nameInput);
  //   console.log(nameInput.value);

  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   })
  // }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'Something';
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
