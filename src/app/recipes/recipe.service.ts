import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model"
import { ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class recipeService{

    recipeSelected= new EventEmitter<Recipe>();

    recipes:Recipe[]=[
        new Recipe('A Test Recipe'
        ,'awesome test!'
        ,'https://www.eatingwell.com/thmb/zrTxfTD1-WUnZFumThetrPmdRTY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Carrot-Cake-Overnight-Oats-3x2-333-2000-22049c3db72f4be3853b72a1036442e0.jpg'
        ,[new ingredient('milk','100ml'),
        new ingredient('oats','5gm')],
        )
    
        ,new Recipe('Another Test Recipe'
        ,'Good test!'
        ,'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.jpg'
        ,[new ingredient('Meat',1),
         new ingredient('Bun',1)])
         ,
         new Recipe('A Test Recipe'
         ,'Simple test!'
         ,'https://d36v5spmfzyapc.cloudfront.net/wp-content/uploads/2022/08/Shahi-Lassi-1.jpg'
         ,[new ingredient('milk','100ml'),
         new ingredient('oats','5gm')],
         )
    
    
      ]

      constructor(private shoppingListService:shoppingListService){}

      getRecipes(){
       return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index]
      }

      addIngredientToShoppingList(ingredients:ingredient[]){

        this.shoppingListService.addIngredients(ingredients)

      }
    
}