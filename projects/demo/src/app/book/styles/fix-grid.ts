import { StyleBook } from '../book';

export class FixGridBook implements StyleBook {
  link = 'Fix Grid';
  attributes = {
    '.r / .row' : 'row class',
    '.c1..12 / .col-1..12': 'col class',
  };

  example = `
<div class="row">
    <div class="col-2">...</div>
    <div class="col-6">...</div>
</div>

<div class="r">
    <div class="c2">...</div>
    <div class="c6">...</div>
</div>
  `;

  demo = `
<div class="row">
    <div class="col-2 box">.col-2</div>
    <div class="col-6 box">.col-6</div>
</div>
<div class="row">
    <div class="col-2 box">.col-2</div>
    <div class="col-3 box">.col-3</div>
    <div class="col-5 box">.col-5</div>
    <div class="col-2 box">.col-2</div>
</div>
  `;
}
