import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingListItem = new EventEmitter <{ name: string, amount: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(name, amount) {
    const newItem = new Ingredient(name.value, amount.value)
    this.shoppingListItem.emit(newItem)
  }
}
