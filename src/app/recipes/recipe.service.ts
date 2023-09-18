import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe',
  //     'This recipe is a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
  //     [
  //       new Ingredient('Abobrinha', 1),
  //       new Ingredient('Alho Poró', 1),
  //       new Ingredient('Camarão', 10),
  //       new Ingredient('Kani', 1),
  //     ]
  //   ),

  //   new Recipe(
  //     'Test Recipe 2',
  //     'This recipe is another test',
  //     'https://i0.wp.com/porkworld.com.br/wp-content/uploads/2021/10/receita-bolo-banana.jpg?resize=800%2C530&ssl=1://upload.wikimedia.org/https://porkworld.com.br/wp-content/uploads/2021/10/receita-bolo-banana.jpg/commons/3/39/Recipe.jpg',
  //     [
  //       new Ingredient('Banana', 8),
  //       new Ingredient('Ovos', 3),
  //       new Ingredient('Farinha', 1),
  //       new Ingredient('Açúcar', 1),
  //       new Ingredient('Canela', 1),
  //       new Ingredient('Leite', 1),
  //     ]
  //   ),
  // ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
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
    this.recipes.splice(index, 1); // deleta o objeto no index passado
    this.recipesChanged.next(this.recipes.slice());
  }
}
