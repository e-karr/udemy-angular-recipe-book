import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() showRecipies = new EventEmitter<{
    recipies: boolean;
    shoppingList: boolean;
  }>();
  @Output() showShoppingList = new EventEmitter<{
    recipies: boolean;
    shoppingList: boolean;
  }>();

  handleShowRecipies() {
    this.showRecipies.emit({
      recipies: true,
      shoppingList: false,
    });
  }

  handleShowShoppingList() {
    this.showShoppingList.emit({
      recipies: false,
      shoppingList: true,
    });
  }
}
