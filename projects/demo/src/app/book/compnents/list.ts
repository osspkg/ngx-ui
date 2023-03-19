import { Component } from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-list-book',
  template: `
      <div class="r">
          <uxwb-list class="p-1 c3" [(key)]="listKey" [color]="'info'" [style]="'btn'">
              <ng-template [list-item]="'l1'">Item 1</ng-template>
              <ng-template [list-item]="'l2'">Item 2</ng-template>
              <ng-template [list-item]="'l3'">Item 3</ng-template>
              <ng-template [list-item]="'l4'">Item 4</ng-template>
          </uxwb-list>
          <uxwb-list class="p-1 c3" [(key)]="listKey" [color]="'secondary'" [style]="'line'">
              <ng-template [list-item]="'l1'">Item 1</ng-template>
              <ng-template [list-item]="'l2'">Item 2</ng-template>
              <ng-template [list-item]="'l3'">Item 3</ng-template>
              <ng-template [list-item]="'l4'">Item 4</ng-template>
          </uxwb-list>
          <uxwb-list class="p-1 c3" [(key)]="listKey" [color]="'warning'" [style]="'box'">
              <ng-template [list-item]="'l1'">Item 1</ng-template>
              <ng-template [list-item]="'l2'">Item 2</ng-template>
              <ng-template [list-item]="'l3'">Item 3</ng-template>
              <ng-template [list-item]="'l4'">Item 4</ng-template>
          </uxwb-list>
      </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ListBook implements ComponentBook {
  link = 'List';
  tag = 'uxwb-list';
  attributes = {
    'list-item': 'item of list with unique key',
    color:'color scheme ( \'light\' | \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
    style:'display style ( \'box\' | \'btn\' | \'line\' )',
    selected:'callback with selected line key',
  };

  component = ListBook;
  example = `
<uxwb-list [(key)]="listKey" [color]="'warning'" [style]="'box'" (selected)="callback($event)">
    <ng-template [list-item]="'l1'">Item 1</ng-template>
    <ng-template [list-item]="'l2'">Item 2</ng-template>
    <ng-template [list-item]="'l3'">Item 3</ng-template>
    <ng-template [list-item]="'l4'">Item 4</ng-template>
</uxwb-list>
  `;

  demo = [
    {},
  ];

  listKey = '';
}
