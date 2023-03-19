import { CheckComponent } from '../../../../../lib/src/lib/check/check.component';
import { ComponentBook } from '../book';

export class CheckBook implements ComponentBook {
  link = 'Check';
  tag = 'uxwb-check';
  attributes = {
    title:'title of check',
    value: 'bool value',
    color: 'color scheme ( \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
  };

  component = CheckComponent;
  example = `
<uxwb-check [title]="'demo'" [color]="'info'" [(value)]="valueBool"></uxwb-check>
  `;

  demo = [
    { title: 'text', value: true, color: 'secondary' },
    { title: 'text', value: true, color: 'warning' },
    { title: 'text', value: true, color: 'danger' },
    { title: 'text', value: true, color: 'success' },
    { title: 'text', value: true, color: 'info' },
    { title: 'text', value: true, color: 'primary' },
    { title: 'text', value: true, color: 'dark' },
  ];
}
