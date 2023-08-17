import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  onIngredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    // new Ingredient('apples', 5),
    // new Ingredient('tomatos', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.next(this.ingredients);
  }

  addToCart(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged.next(this.ingredients);
  }
}
