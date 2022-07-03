import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dAYJS'
})
export class DAYJSPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
