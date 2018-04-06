import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MaxPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'max',
})
@Injectable()
export class MaxPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(val, args) {
     var words = val.match(/\S+/g).length;

        if (words > 300) {
          // Split the string on first 200 words and rejoin on spaces
          var trimmed = val.split(/\s+/, 300).join(" ");
          // Add a space at the end to make sure more typing creates new words
        return trimmed;
        }
   }
}
