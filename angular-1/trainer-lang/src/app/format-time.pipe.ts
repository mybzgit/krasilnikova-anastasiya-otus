import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let minutes: string;
    let seconds: string;

    if (value >= 60)
      minutes = `${Math.floor(value / 60)}`;
    else
      minutes = "00";

    if (value % 60 < 10)
      seconds = `0${value % 60}`;
    else
      seconds = `${value % 60}`;

    return `${minutes}:${seconds}`;
  }
}