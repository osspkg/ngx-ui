import { Component } from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-check-book',
  template: `
      <uxwb-check [title]="'demo'" [color]="'info'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'warning'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'danger'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'success'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'secondary'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'dark'"></uxwb-check>
      <uxwb-check [title]="'demo'" [color]="'primary'"></uxwb-check>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CheckBook implements ComponentBook {
  link = 'Check';
  tag = 'uxwb-check';
  attributes = {
    title:'title of check',
    value: 'bool value',
    color: 'color scheme ( \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
  };

  component = CheckBook;
  example = `
<uxwb-check [title]="'demo'" [color]="'info'" [(value)]="valueBool"></uxwb-check>
  `;
}
