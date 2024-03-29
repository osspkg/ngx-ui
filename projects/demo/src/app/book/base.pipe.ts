import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export class Slice {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

@Pipe({
  name: 'map2slice',
})
export class Map2SlicePipe implements PipeTransform {
  transform(value: { [title: string]: string }): Slice[] {
    const $result: Slice[] = [];

    Object.keys(value).forEach((key: string) => {
      $result.push(new Slice(key, value[key]));
    });
    return $result;
  }
}

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private s: DomSanitizer) {
  }

  transform(value: string): SafeHtml {
    return this.s.bypassSecurityTrustHtml(value);
  }
}
