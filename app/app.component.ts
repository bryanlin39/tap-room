import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list [childKegList]='kegs' (updateKegSender)='updateKeg($event)' (updatePintSender)='updatePint($event)'></keg-list>
    <hr>
    <update-keg [childSelectedKeg]='selectedKeg' (finishedUpdatingSender)='finishedUpdating()'></update-keg>
    <hr>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;

  kegs: Keg[] = [
    new Keg('IPA','Bryan\'s Brewery',4.00,4.2),
    new Keg('Bud Light','David\'s brewery',6.00,3.8),
    new Keg('Coors Light','Jason\'s Brewery', 5.00, 4.0)
  ];

  updateKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedUpdating() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.kegs.push(newKegFromChild);
  }

  updatePint(kegPint){
    kegPint.volume -= 1;
  }
}
