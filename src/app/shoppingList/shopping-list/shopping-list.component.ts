import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredints.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private sopping: shoppingListService) { }

  ngOnInit() {
    this.ingredients=this.sopping.getShoppinglist();
 this.sopping.ingredientChane
 .subscribe(
    (ingredients:Ingredient[])=>{
      this.ingredients =ingredients;
    }
 );
  }
/*   onIngredeientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  } */
}
