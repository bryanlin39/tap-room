import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div>
    <h3>Enter new Keg info</h3>
    <label>Enter Keg Name:</label>
    <input #newName>
    <label>Enter Keg Brand:</label>
    <input #newBrand>
    <label>Enter Keg Price:</label>
    <input #newPrice>
    <label>Enter Keg Alcohol Content:</label>
    <input #newAlcohol>
    <button class="btn btn-primary"(click)="submitForm(newName.value,newBrand.value,newPrice.value,newAlcohol.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcohol.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
