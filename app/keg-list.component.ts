import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)='onChange($event.target.value)'>
    <label>Sort By:</label><br>
    <option value='allKegs' selected='selected'>All Kegs</option>
    <option value='lessThanTenPints'>Less Than 10 Pints Remaining</option>
    <option value='moreThanTenPints'>More Than 10 Pints Remaining</option>
  </select>

  <ul>
    <li [class]='priceColor(currentKeg)' *ngFor="let currentKeg of childKegList | checkPintsRemaining:filterByPints">{{currentKeg.name}} - {{currentKeg.brand}} - \${{currentKeg.price}} - {{currentKeg.alcoholContent}} ABV - {{currentKeg.volume}} pints remaining
    <br>
    <button class="btn btn-primary" (click)="updateKegButton(currentKeg)">Update</button>
    <button class="btn btn-danger" (click)="buyPint(currentKeg)">Buy Pint</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() updateKegSender = new EventEmitter();
  @Output() updatePintSender = new EventEmitter();

  filterByPints: string = 'allKegs';

  updateKegButton(kegToEdit: Keg) {
    this.updateKegSender.emit(kegToEdit);
  }

  buyPint(kegPint: Keg) {
    this.updatePintSender.emit(kegPint);
  }

  priceColor(currentKeg) {
    if(currentKeg.price < 5) {
      return 'bg-success';
    } else if (currentKeg.price === 5) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }
}
