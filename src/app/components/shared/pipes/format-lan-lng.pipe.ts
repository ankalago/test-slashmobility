import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLanLng'
})
export class FormatLanLngPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(6);
  }

}
