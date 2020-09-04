import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  displayContent: string = 'recipe';

  onNavigate(content: string) {
    this.displayContent = content;
  }
}
