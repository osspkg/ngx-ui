import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {

  moduleText = `
import { UXWBUIModule } from '@uxwb/ngx-ui';

@NgModule({
  ...
  imports: [
    ...
    UXWBUIModule,
  ],
...
})
  `;

  customVar = `
:root {
  --uxwb-color-secondary-bg: #e2e2e2;
  --uxwb-color-secondary-line: #d5d5d5;
  --uxwb-color-secondary-text: #000000;
  --uxwb-color-warning-bg: #fff53b;
  --uxwb-color-warning-line: #fff422;
  --uxwb-color-warning-text: #000000;
  --uxwb-color-danger-bg: #fd1f1f;
  --uxwb-color-danger-line: #fd0606;
  --uxwb-color-danger-text: #000000;
  --uxwb-color-success-bg: #25fa96;
  --uxwb-color-success-line: #0cf98a;
  --uxwb-color-success-text: #000000;
  --uxwb-color-info-bg: #4ea2fa;
  --uxwb-color-info-line: #3595f9;
  --uxwb-color-info-text: #FFFFFF;
  --uxwb-color-primary-bg: #0054f3;
  --uxwb-color-primary-line: #004bda;
  --uxwb-color-primary-text: #FFFFFF;
  --uxwb-color-dark-bg: #000000;
  --uxwb-color-dark-line: black;
  --uxwb-color-dark-text: #FFFFFF;
}
  `;

}
