import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe: Recipe
  id: number;

  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,){}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  onAddToCart(){
    this.slService.addToCart(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
