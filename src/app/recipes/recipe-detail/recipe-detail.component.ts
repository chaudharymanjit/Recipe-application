import { Component, OnInit} from '@angular/core';
import { ActivatedRoute ,Params,Router} from '@angular/router';


import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  implements OnInit{

   recipe:Recipe
   id:number

   

  constructor(private recipeService:recipeService,
              private route:ActivatedRoute,
              private router:Router){}


              ngOnInit(){
                  this.route.params.subscribe(
                    (params:Params) =>{
                    this.id = +params['id'];
                    // console.log(this.id);
                   this.recipe= this.recipeService.getRecipe(this.id)
                  })
              }


  onAddToShoppingList(){

    this.recipeService.addIngredientToShoppingList(this.recipe.Ingredients)

  }

  onEditRecipe(){

    this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route})

  }

}
