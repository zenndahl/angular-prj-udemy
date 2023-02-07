import { Component } from '@angular/core';
import { Igredient } from '../shared/igredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  igredients: Igredient[] = [
    new Igredient('apples', 5),
    new Igredient('tomatos', 3)
  ];

  onIgredientAdded(igredient: Igredient){
    this.igredients.push(igredient);
  }
}
