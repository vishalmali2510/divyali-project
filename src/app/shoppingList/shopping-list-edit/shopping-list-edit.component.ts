import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
/* import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
 */
import {Ingredient} from '../../shared/ingredints.model';
import{shoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
/*@Output() ingredientAdded = new EventEmitter<Ingredient>(); */

  constructor(private sopping: shoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount );
 /*    this.ingredientAdded.emit(newIngredient); */
 this.sopping.addIngredient(newIngredient);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';


  }
}
