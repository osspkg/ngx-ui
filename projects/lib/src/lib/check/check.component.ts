import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorsShort } from '../core/variables';

@Component({
  selector: 'uxwb-check',
  templateUrl: './check.component.html',
})
export class CheckComponent {
  @Input() title = '';
  @Input() value = false;
  @Output() valueChange = new EventEmitter<boolean>();
  @Input() color: ColorsShort = 'dark';

  toggle(v: boolean): void {
    this.value = v;
    this.valueChange.emit(v);
  }
}
