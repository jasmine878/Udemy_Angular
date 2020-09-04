import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
