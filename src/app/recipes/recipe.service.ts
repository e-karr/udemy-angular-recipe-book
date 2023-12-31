import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  //Manage recipes

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Mac & Cheese',
  //     'Creamy and cheese mac and cheese.',
  //     'https://upload.wikimedia.org/wikipedia/commons/8/8f/Macaroni_and_cheese_%282%29_%28cropped%29.jpg',
  //     [
  //       new Ingredient('16 oz elbow noodles', 1),
  //       new Ingredient('8 oz cheddar cheese', 1),
  //       new Ingredient('8 oz heavy cream', 1),
  //       new Ingredient('tablespoon butter', 2),
  //     ]
  //   ),
  //   new Recipe(
  //     'Angus Burger',
  //     'Quarter pound Angus beef',
  //     'https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_1280.jpg',
  //     [
  //       new Ingredient('1/4 lb Angus patty', 1),
  //       new Ingredient('hamburger bun', 1),
  //       new Ingredient('tomato slice', 1),
  //       new Ingredient('lettuce leaf', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); //get copy of recipes array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
