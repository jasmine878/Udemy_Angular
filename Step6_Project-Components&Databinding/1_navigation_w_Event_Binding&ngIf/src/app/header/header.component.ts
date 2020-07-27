import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() displayContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onShowRecipe() {
    this.displayContent.emit("recipe");
  }

  onShowShoppingList() {
    this.displayContent.emit("shoppinglist");
  }

}
