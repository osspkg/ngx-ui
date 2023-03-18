import { InputComponent } from '../../../../../lib/src/lib/input/input.component';
import { ComponentBook } from '../book';

export class InputBook implements ComponentBook {
  link = 'Input';
  tag = 'uxwb-input';
  attributes = {
    type : 'input type (\'text\' | \'password\' | \'color\' | \'date\' | \'datetime-local\' | \'email\' | \'number\' | \'tel\' | \'search\')',
    color: 'color scheme ( \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
  };

  component = InputComponent;
  example = `
  <uxwb-input 
    [title]="'text'" 
    [type]="'text'" 
    [color]="'secondary'" 
    [(data)]="object"
  ></uxwb-input>
  `;

  demo = [
    { title:'text', type:'text', color:'secondary' },
    { title:'password', type:'password', color:'warning' },
    { title:'tel', type:'tel', color:'danger' },
    { title:'email', type:'email', color:'success' },
    { title:'number', type:'number', color:'info' },
    { title:'search', type:'search', color:'primary' },
    { title:'color', type:'color', color:'primary' },
    { title:'date', type:'date', color:'primary' },
    { title:'datetime-local', type:'datetime-local', color:'dark' },
  ];
}
