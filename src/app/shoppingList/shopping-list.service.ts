import { Ingredient } from '../shared/ingredints.model';
import{ EventEmitter} from '@angular/core';
export class shoppingListService{
    ingredientChane= new EventEmitter<Ingredient[  ]>();
  private  ingredients: Ingredient[] = [
        new Ingredient('Apple', 10),
        new Ingredient('Mango', 20),
    ];
    getShoppinglist(){
       return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChane.emit(this.ingredients.slice());

    }
}