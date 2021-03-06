import { Component, OnInit, Input } from '@angular/core';
import { ShoppinglistService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppinglist: ShoppinglistService) {}

  ngOnInit() {
    this.ingredients = this.shoppinglist.getIngredients();
    this.shoppinglist.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        }
      )
  }
}
