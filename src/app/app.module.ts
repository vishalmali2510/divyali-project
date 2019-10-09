import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipeBook/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipeBook/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponentComponent } from './recipeBook/recipe-component/recipe-component.component';
import { RecipeComponent } from "./recipeBook/recipe/RecipeComponent";
import { DirectivesIntroComponent } from './directives-intro/directives-intro.component';
import { DropdownDirective} from './shared/dropdown.directive';
import { shoppingListService } from './shoppingList/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponentComponent,
    RecipeComponent,
    DirectivesIntroComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
