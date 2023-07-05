import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  @Output() addedIngredient = new EventEmitter<Ingredient>();

  addIngredient() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.addedIngredient.emit(newIngredient);
  }
}
