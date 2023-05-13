import { Component } from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-tab-book',
  template: `
      <div class="r">
          <uxwb-tab class="c6" [default]="'Tab1'" [color]="'warning'" [style]="'btn'">
              <ng-template [tab]="'Tab1'">
                  tab 1
              </ng-template>
              <ng-template [tab]="'Tab2'">
                  tab 2
              </ng-template>
          </uxwb-tab>

          <uxwb-tab class="c6" [default]="'Tab1'" [color]="'warning'" [style]="'line'">
              <ng-template [tab]="'Tab1'">
                  tab 1
              </ng-template>
              <ng-template [tab]="'Tab2'">
                  tab 2
              </ng-template>
          </uxwb-tab>
      </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TabsBook implements ComponentBook {
  link = 'Tabs';
  tag = 'uxwb-tab';
  attributes = {
    default: 'tab by default',
    color:'color scheme ( \'light\' | \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
    style:'display style ( \'btn\' | \'line\')',
    switch:'callback with active tab name',
  };

  component = TabsBook;
  example = `
<uxwb-tab [default]="'Tab1'" [color]="'warning'" [style]="'btn'" (switch)="callback($event)">
    <ng-template [tab]="'Tab1'">
        tab 1
    </ng-template>
    <ng-template [tab]="'Tab2'">
        tab 2
    </ng-template>
</uxwb-tab>
  `;

  demo = [
    {},
  ];
}
