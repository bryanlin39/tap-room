import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { UpdateKegComponent }  from './update-keg.component';
import { NewKegComponent } from './new-keg.component';
import { PintsRemainingPipe } from './pints-remaining.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, UpdateKegComponent, NewKegComponent, PintsRemainingPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
