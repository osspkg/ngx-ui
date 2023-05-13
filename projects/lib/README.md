# @uxwb/ngx-ui

## Demo

All components are shown [here](https://ngx-ui.uxwb.ru/)

## Installation

```bash
  $ yarn add @uxwb/ngx-ui
```

## Use

### styles.scss

```scss
@import "@uxwb/ngx-ui";
```

### app.module.ts

```typescript
import { UXWBUIModule } from '@uxwb/ngx-ui';

@NgModule({
  ...
  imports: [
    ...
    UXWBUIModule,
  ],
...
})
```

### Compatibility

| ngx-ui | Angular         |
|--------|-----------------|
| 1.x.x  | 14.x.x - 15.x.x |

## Themes

```scss
@import "@uxwb/ngx-ui/themes/rainbow";
@import "@uxwb/ngx-ui/themes/tenderness";
@import "@uxwb/ngx-ui/themes/summer";
@import "@uxwb/ngx-ui/themes/twilight";
```

### Customization variables

```css
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
  --uxwb-color-dark-text: #FFFFFF
}
```

## License

BSD-3-Clause License. See the LICENSE file for details.
