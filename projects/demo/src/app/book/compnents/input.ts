import { Component } from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-input-book',
  template: `
    <div class="r">
      <uxwb-input [title]="'text'" [type]="'text'" [color]="'secondary'" class="c"></uxwb-input>
      <uxwb-input [title]="'password'" [type]="'password'" [color]="'warning'" class="c"></uxwb-input>
      <uxwb-input [title]="'tel'" [type]="'tel'" [color]="'danger'" class="c"></uxwb-input>
      <uxwb-input [title]="'email'" [type]="'email'" [color]="'success'" class="c"></uxwb-input>
      <uxwb-input [title]="'number'" [type]="'number'" [color]="'info'" class="c"></uxwb-input>
      <uxwb-input [title]="'search'" [type]="'search'" [color]="'primary'" class="c"></uxwb-input>
      <uxwb-input [title]="'color'" [type]="'color'" [color]="'dark'" class="c"></uxwb-input>
      <uxwb-input [title]="'date'" [type]="'date'" [color]="'danger'" class="c"></uxwb-input>
      <uxwb-input [title]="'datetime-local'" [type]="'datetime-local'" [color]="'danger'" class="c"></uxwb-input>
    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class InputBook implements ComponentBook {
  link = 'Input';
  tag = 'uxwb-input';
  attributes = {
    type : 'input type (\'text\' | \'password\' | \'color\' | \'date\' | \'datetime-local\' | \'email\' | \'number\' | \'tel\' | \'search\')',
    color: 'color scheme ( \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
  };

  component = InputBook;
  example = `
  <uxwb-input
    [title]="'text'"
    [type]="'text'"
    [color]="'secondary'"
    [(data)]="object"
  ></uxwb-input>
  `;
}
