import {
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { ColorsShort } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ListStyle = 'box' | 'btn' | 'line';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[list-item]',
})
export class ListItemDirective {
  @Input('list-item') key!: string;

  constructor(public template: TemplateRef<unknown>) {
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() key = '';
  @Output() keyChange = new EventEmitter<string>();
  @Input() color: ColorsShort = 'secondary';
  @Input() style: ListStyle = 'box';
  @ContentChildren(ListItemDirective) contents!: QueryList<ListItemDirective>;
  @Output() selected = new EventEmitter<string>();

  emitData(key: string): void {
    this.key = key;
    this.keyChange.emit(key);
    this.selected.emit(key);
  }
}
