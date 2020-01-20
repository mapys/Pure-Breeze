import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement){
    this.addedIngredient.emit(new Ingredient(nameInput.value, amountInput.valueAsNumber));
  }

}
