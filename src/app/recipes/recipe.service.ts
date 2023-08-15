import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 
            'This recipe is a test', 
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Abobrinha', 1),
                new Ingredient('Alho Poró', 1),
                new Ingredient('Camarão', 10),
                new Ingredient('Kani', 1),
            ]
        ),

        new Recipe('Test Recipe 2', 
            'This recipe is another test', 
            'https://i0.wp.com/porkworld.com.br/wp-content/uploads/2021/10/receita-bolo-banana.jpg?resize=800%2C530&ssl=1://upload.wikimedia.org/https://porkworld.com.br/wp-content/uploads/2021/10/receita-bolo-banana.jpg/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Banana', 8),
                new Ingredient('Ovos', 3),
                new Ingredient('Farinha', 1),
                new Ingredient('Açúcar', 1),
                new Ingredient('Canela', 1),
                new Ingredient('Leite', 1),
            ]
        )
    ]

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }
}