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
    <li [class]='priceColor(currentKeg)' [class]='alcoholContent(currentKeg)' *ngFor="let currentKeg of childKegList | checkPintsRemaining:filterByPints">{{currentKeg.name}} - {{currentKeg.brand}} -
    <span *ngIf='happyHourOn'>\${{currentKeg.price*.5}}</span>
    <span *ngIf='!happyHourOn'>\${{currentKeg.price}}</span>
    - {{currentKeg.alcoholContent}} ABV - {{currentKeg.volume}} pints remaining
    <br>
    <button class="btn btn-primary" (click)="updateKegButton(currentKeg)">Update</button>
    <button class="btn btn-danger" (click)="buyPint(currentKeg)">Buy Pint</button></li>
  </ul>

  <button *ngIf='!happyHourOn'(click)='happyHour()'>Happy Hour!</button>
  <button *ngIf='happyHourOn' (click)='happyHour()'>Sad Hour!</button>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() updateKegSender = new EventEmitter();
  @Output() updatePintSender = new EventEmitter();

  happyHourOn = false;
  filterByPints: string = 'allKegs';

  happyHour = function(){
    this.happyHourOn = !this.happyHourOn;
  };

  ngOnInit(){
    var access = this;
    setInterval(function(){
      var currentTime = new Date
      if(currentTime.getHours()===15||currentTime.getHours()===18){
        access.happyHour()
      }
    }, 60000);
  }

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

  alcoholContent(currentKeg){
    if(currentKeg.alcoholContent > 5) {
      return 'highABV';
    } else {
      return 'lowABV';
    }
  }

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }

}
