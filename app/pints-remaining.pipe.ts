import { Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'checkPintsRemaining',
  pure: false
})


export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[], pintsRemaining) {
    var output: Keg[] = [];
    if(pintsRemaining === 'lessThanTenPints'){
      for (var i=0; i<input.length; i++) {
        if (input[i].volume <= 10) {
          output.push(input[i]);
        }
      }
    } else if(pintsRemaining === 'moreThanTenPints'){
      for (var i=0; i<input.length; i++) {
        if (input[i].volume > 10) {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
