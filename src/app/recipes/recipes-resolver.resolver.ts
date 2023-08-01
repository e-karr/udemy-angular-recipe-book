import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { inject } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Observable } from "rxjs";

export const RecipeResolver: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    dataStoragService: DataStorageService = inject(DataStorageService),
    recipeService: RecipeService = inject(RecipeService)
): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> => {
    const recipes = recipeService.getRecipes();

    if (recipes.length === 0) {
      return dataStoragService.fetchRecipes();
    } else {
      return recipes;
    }
  }