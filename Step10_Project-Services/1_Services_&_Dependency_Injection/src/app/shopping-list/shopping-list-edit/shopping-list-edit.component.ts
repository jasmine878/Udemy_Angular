import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  constructor(private shoppingList: ShoppinglistService) {}

  onSubmit(name, amount) {
    const newItem = new Ingredient(name.value, amount.value)
    this.shoppingList.addItem(newItem);
  }
}
