import { Recipe } from './recipes/recipe.model';

export class RecipeService {
  selectedRecipe: Recipe;

  updateRecipe(recipe) {
    this.selectedRecipe = recipe;
  }
}
