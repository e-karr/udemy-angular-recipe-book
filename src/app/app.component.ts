import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipies: boolean = true;
  shoppingList: boolean = false;

  onShowRecipies(event: {
    recipies: boolean;
    shoppingList: boolean;
  }) {
    this.recipies = event.recipies;
    this.shoppingList = event.shoppingList;
  }

  onShowShoppingList(event: {
    recipies: boolean;
    shoppingList: boolean;
  }) {
    this.recipies = event.recipies;
    this.shoppingList = event.shoppingList;
  }
  
}
