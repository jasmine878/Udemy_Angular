import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRecipe: boolean = true;
  displayIngredients: boolean = true;

  navigation(option: string) {
    option === "recipe" ? this.displayRecipe = true : this.displayRecipe = false;
    this.displayIngredients = !this.displayRecipe;
  }
}
