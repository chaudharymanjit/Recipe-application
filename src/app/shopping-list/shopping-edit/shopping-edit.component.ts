import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;


  constructor(private shoppingListService:shoppingListService){

  }

  ngOnInit(): void {
      
  }


  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;

    const newIngredient=new ingredient(ingName,ingAmount);

    this.shoppingListService.addIngredient(newIngredient);
    
  }

}
