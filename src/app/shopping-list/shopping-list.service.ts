import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  // manage shopping list
  // add ingredient

  addedIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addedIngredient.emit(this.ingredients.slice());
  }
}
