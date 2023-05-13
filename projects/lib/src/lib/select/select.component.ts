import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output, QueryList,
  TemplateRef, ViewChild,
} from '@angular/core';
import { ColorsShort } from '../core/variables';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[select-item]',
})
export class SelectItemDirective {
  @Input('select-item') key!: string;

  constructor(public template: TemplateRef<unknown>) {
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements AfterViewInit {

  _show = false;
  _popup = false;

  curr!: TemplateRef<unknown>;

  @Input() max = 10;
  @Input() key = '';
  @Output() keyChange = new EventEmitter<string>();
  @Input() title?: string = '';
  @Input() filter = '';
  @Input() color: ColorsShort = 'dark';
  @Input() placeholder = 'choose ...';
  @Output() selected = new EventEmitter<string>();

  @ContentChildren(SelectItemDirective) contents!: QueryList<SelectItemDirective>;
  @ViewChild('def', { read: TemplateRef }) def!: TemplateRef<unknown>;

  @HostListener('click') hostClick() {
    this._popup = true;
  }

  @HostListener('mouseleave') hostMouseLeave() {
    this._popup = false;
  }

  ngAfterViewInit(): void {
    this._show = true;
    if (this.key.length > 0) {
      const v = this.contents.filter(item => item.key === this.key);
      if (v.length > 0) {
        this.curr = v[0].template;
        return;
      }
    }
    this.curr = this.def;
  }

  emitData(key: string, template: TemplateRef<unknown>): void {
    this.selected.emit(key);
    this.keyChange.emit(key);
    this.filter = '';
    this.curr = template;
    this._popup = false;
  }

}
