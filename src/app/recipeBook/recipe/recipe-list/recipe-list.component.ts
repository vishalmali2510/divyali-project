import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from'../../recipe.model';
import { RecipeService } from 'src/app/recipeBook/recipe/recipe-item/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  OnRecipeselected(recipe: Recipe ) {
    this.recipes = this.recipeService.getRecipes();

  }
}
