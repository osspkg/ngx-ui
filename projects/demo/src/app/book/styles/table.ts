import { StyleBook } from '../book';

export class TableBook implements StyleBook {
  link = 'Table';
  attributes = {
    'table > th/tr > td' : 'base tags',
  };

  example = `
<table>
    <tr>
        <th>...</th>
    </tr>
    <tr>
        <td>...</td>
    </tr>
</table>
  `;

  demo = `
<table>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>City</th>
    </tr>

    <tr>
        <td>1</td>
        <td>Harly</td>
        <td>SPb</td>
    </tr>

    <tr>
        <td>2</td>
        <td>Joy</td>
        <td>SPb</td>
    </tr>
</table>
  `;
}
