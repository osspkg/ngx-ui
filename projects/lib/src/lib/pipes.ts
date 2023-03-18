import { Pipe, PipeTransform, TemplateRef, ViewContainerRef } from '@angular/core';

@Pipe({
  name: 'keyGetter',
})
export class KeyGetterPipe implements PipeTransform {
  transform(value: { [title: string]: unknown }, filter: string): string {
    let $result = '';
    const $filter = filter.toLowerCase();
    Object.keys(value).forEach((key: string) => {
      if (key.toLowerCase() === $filter) {
        $result = key;
      }
    });
    return $result;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Pipe({
  name: 'keysFilter',
})
export class KeysFilterPipe implements PipeTransform {
  transform(value: { [title: string]: unknown }, filter: string): string[] {
    const $result: string[] = [];
    const $filter = filter.toLowerCase();
    Object.keys(value).forEach((key: string) => {
      if ($filter.length === 0 || key.toLowerCase().indexOf($filter) !== -1) {
        $result.push(key);
      }
    });
    return $result;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Pipe({
  name: 'tmplFilter',
})
export class TmplFilterPipe implements PipeTransform {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  transform(value: TemplateRef<unknown>, filter: string, usf: boolean): boolean {
    if (!usf) {
      return true;
    }
    let has = false;
    const link = this.viewContainerRef.createEmbeddedView(value);
    link.detectChanges();
    link.rootNodes.forEach(v => {
      if (v?.textContent?.indexOf(filter) !== -1) {
        has = true;
      }
    });
    link.destroy();
    return has;
  }
}
