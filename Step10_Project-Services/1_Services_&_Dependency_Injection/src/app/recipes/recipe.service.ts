import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { BrowserTransferStateModule } from '@angular/platform-browser';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken and Asparagus',
      'Garlic Butter Chicken Bites with Lemon Asparagus',
      "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg",
      [
        new Ingredient("chicken breast", 3),
        new Ingredient("asparagus", 2),
        new Ingredient("lemon", 1)
      ]),
    new Recipe(
      'Spinach',
      '5-Minute Sauteed Lemon Garlic Spinach',
      "https://www.eatwell101.com/wp-content/uploads/2020/08/Sauteed-Lemon-Garlic-Spinach-2.jpg",
      [
        new Ingredient("spinach", 6),
        new Ingredient("garlic clove", 2),
        new Ingredient("lemon", 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
