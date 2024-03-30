import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

 Ingredients:ingredient[];
  

    constructor(private shoppingListService:shoppingListService) {
      
    }

  ngOnInit(): void {

    this.Ingredients=this.shoppingListService.getIngredient();

    this.shoppingListService.ingredientChanged
    .subscribe(
      (ingredients:ingredient[])=>{

       this.Ingredients =ingredients;

      }
    )
      
  }

  

}
