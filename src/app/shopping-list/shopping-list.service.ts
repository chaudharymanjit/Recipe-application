
import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model"


export class shoppingListService{

    ingredientChanged = new EventEmitter<ingredient[]>();

    Ingredients:ingredient[]=[
        new ingredient('apple',10),
        new ingredient('banana',5)
      ]


  getIngredient(){

    return this.Ingredients.slice();
  }

  addIngredient(ingredient:ingredient){

    this.Ingredients.push(ingredient);

    this.ingredientChanged.emit(this.Ingredients.slice())

  }

  addIngredients(ingredients:ingredient[]){

    for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
    // this.Ingredients.push(...ingredients)
      this.ingredientChanged.emit(this.Ingredients.slice())

    
  }

}