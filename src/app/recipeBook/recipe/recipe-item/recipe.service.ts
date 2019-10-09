import { Recipe } from '../../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../../shared/ingredints.model';
import { shoppingListService } from 'src/app/shoppingList/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
     private  recipes: Recipe[] =
        [new Recipe(
            'A Test Recipe',
            'testy Recipe fist',
            // tslint:disable-next-line:max-line-length
            'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg',
            [new Ingredient('Mango',2),
             new Ingredient('Papaya',20)
              ]),
        new Recipe(
            'Another Test Recipe',
            'testy Recipe fist',
            // tslint:disable-next-line:max-line-length
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg',
            [new Ingredient('vadaPav',8),
            new Ingredient('Missal',3)
        ])
        ];

    constructor(private slService: shoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

  /*   addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    } */
}