import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Igredient } from 'src/app/shared/igredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  @Output() igredientAdded = new EventEmitter<Igredient>() 

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIgredient = new Igredient(ingName, ingAmount);
    this.igredientAdded.emit(newIgredient);
  }
}
