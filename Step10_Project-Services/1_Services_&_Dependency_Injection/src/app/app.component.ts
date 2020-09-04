import { Component } from '@angular/core';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppinglistService]
})
export class AppComponent {
  displayContent: string = 'recipe';

  onNavigate(content: string) {
    this.displayContent = content;
  }
}
