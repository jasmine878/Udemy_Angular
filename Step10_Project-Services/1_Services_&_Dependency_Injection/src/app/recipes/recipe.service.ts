import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg"),
    new Recipe('Another Test Recipe', 'This is simply a test', "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg")
  ];

  selectedRecipe: Recipe;

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
