import {Component, ElementRef, Output, ViewChild, EventEmitter} from "@angular/core";
import {Ingredient} from "../../shared/Ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
    '.btn {margin-right: 5px;}'
  ]
})

export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  @Output() onAddElement = new EventEmitter<Ingredient>();

  addElement(): void {
    this.onAddElement.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ))

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
