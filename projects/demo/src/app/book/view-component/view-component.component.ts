import {
  AfterViewInit,
  Component, ComponentRef,
  Input, OnDestroy, Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss'],
})
export class ViewComponentComponent implements AfterViewInit, OnDestroy {

  refs: ComponentRef<any>[] = [];

  @Input() data!: ComponentBook;

  @ViewChild('code', { read: ViewContainerRef }) code!: ViewContainerRef;

  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngAfterViewInit(): void {
    const ref = this.code.createComponent(this.data.component);
    (ref.location.nativeElement as HTMLElement).classList.add('c');
    ref.hostView.detectChanges();
    this.refs.push(ref);
  }

  ngOnDestroy(): void {
    this.refs.forEach(value => {
      value.destroy();
    });
  }
}
