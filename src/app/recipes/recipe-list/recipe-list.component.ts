import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent  implements OnInit{


  recipes:Recipe[];

  constructor(private recipeService: recipeService,
              private router:Router,
              private route:ActivatedRoute){

  }

  ngOnInit(): void {

    this.recipes=this.recipeService.getRecipes()
      
  }

  onNewRecipe(){
    
    this.router.navigate(['new'],  {relativeTo:this.route})
  }

  


}
