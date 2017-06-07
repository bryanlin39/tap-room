import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'update-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}, {{childSelectedKeg.brand}}</h3>
      <hr>
      <h3>Update Keg Info</h3>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter Keg Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Enter Keg Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <button class="btn btn-primary"(click)="finishedUpdatingButton()">Save</button>
    </div>
  </div>
  `
})

export class UpdateKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() finishedUpdatingSender = new EventEmitter();

  finishedUpdatingButton() {
    this.finishedUpdatingSender.emit();
  }
}
