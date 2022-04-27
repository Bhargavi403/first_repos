import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis',
  pure: true // change it to false -- and check the console. 
})
export class EllipsisPipe implements PipeTransform {

  /* impure-pipe works for every change in the component 
      pure-pipe works only when the component is loaded.
  */

  transform(value: string, ...args: number[]): unknown {
    console.log(value);
    console.log(args[0]);
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
