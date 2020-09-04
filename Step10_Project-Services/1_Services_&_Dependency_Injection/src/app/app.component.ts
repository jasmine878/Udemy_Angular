import { Component } from '@angular/core';
import { ShoppinglistService } from './shopping-list.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppinglistService, RecipeService]
})
export class AppComponent {
  displayContent: string = 'recipe';

  onNavigate(content: string) {
    this.displayContent = content;
  }
}
