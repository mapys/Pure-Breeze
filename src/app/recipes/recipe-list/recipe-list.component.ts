import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() currentRecipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
    new Recipe('Another Test Recipe', 'This is a test again', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.currentRecipeSelected.emit(recipe);
  }

}
