import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
