import { Component } from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-select-book',
  template: `
      <div class="r">
          <uxwb-select class="p-1 c3" [color]="'danger'" [title]="'demo'" (selected)="log($event)" [filter]="'1'">
              <ng-template [select-item]="'l1'">Item 1</ng-template>
              <ng-template [select-item]="'l2'">Item 2</ng-template>
              <ng-template [select-item]="'l3'">Item 3</ng-template>
              <ng-template [select-item]="'l4'">Item 4</ng-template>
              <ng-template [select-item]="'l5'">Item 5</ng-template>
              <ng-template [select-item]="'l6'">Item 6</ng-template>
              <ng-template [select-item]="'l7'">Item 7</ng-template>
              <ng-template [select-item]="'l8'">Item 8</ng-template>
              <ng-template [select-item]="'l9'">Item 9</ng-template>
              <ng-template [select-item]="'l10'">Item 10</ng-template>
              <ng-template [select-item]="'l11'">Item 11</ng-template>
          </uxwb-select>
          <uxwb-select class="p-1 c3" [color]="'dark'" [title]="'demo'" [key]="'l2'">
              <ng-template [select-item]="'l1'">Item 1</ng-template>
              <ng-template [select-item]="'l2'">Item 2</ng-template>
              <ng-template [select-item]="'l3'">Item 3</ng-template>
              <ng-template [select-item]="'l4'">Item 4</ng-template>
          </uxwb-select>
      </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SelectBook implements ComponentBook {
  link = 'Select';
  tag = 'uxwb-select';
  attributes = {
    key: 'key of option',
    filter: 'filter by option value',
    title: 'title of select',
    color: 'color scheme ( \'light\' | \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
    selected: 'callback with key of selected option',
  };

  component = SelectBook;
  example = `
<uxwb-select 
    [color]="'danger'" 
    [title]="'demo'" 
    [filter]="'1'" 
    [key]="'l2'"
    (selected)="log($event)" 
>
    <ng-template [select-item]="'l1'">Item 1</ng-template>
    <ng-template [select-item]="'l2'">Item 2</ng-template>
    <ng-template [select-item]="'l3'">Item 3</ng-template>
    <ng-template [select-item]="'l4'">Item 4</ng-template>
    <ng-template [select-item]="'l5'">Item 5</ng-template>
    <ng-template [select-item]="'l6'">Item 6</ng-template>
    <ng-template [select-item]="'l7'">Item 7</ng-template>
    <ng-template [select-item]="'l8'">Item 8</ng-template>
    <ng-template [select-item]="'l9'">Item 9</ng-template>
    <ng-template [select-item]="'l10'">Item 10</ng-template>
    <ng-template [select-item]="'l11'">Item 11</ng-template>
</uxwb-select>
  `;

  demo = [
    {},
  ];

  selectKey = '';

  log(v: unknown) {
    console.log(v);
  }
}
